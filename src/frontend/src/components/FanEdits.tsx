import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Check,
  Film,
  Heart,
  Key,
  Loader2,
  LogOut,
  Play,
  ShieldCheck,
  Upload,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ExternalBlob, type FanEdit } from "../backend";
import { useActor } from "../hooks/useActor";
import { useInternetIdentity } from "../hooks/useInternetIdentity";
import { SectionHeader } from "./SectionHeader";

function useApprovedFanEdits() {
  const { actor, isFetching } = useActor();
  return useQuery<FanEdit[]>({
    queryKey: ["approvedFanEdits"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getApprovedFanEdits();
    },
    enabled: !!actor && !isFetching,
  });
}

function usePendingFanEdits() {
  const { actor, isFetching } = useActor();
  return useQuery<FanEdit[]>({
    queryKey: ["pendingFanEdits"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getPendingFanEdits();
    },
    enabled: !!actor && !isFetching,
  });
}

function VideoCard({ edit, index }: { edit: FanEdit; index: number }) {
  const videoUrl = edit.videoId.getDirectURL();
  const date = new Date(Number(edit.createdAt / 1_000_000n)).toLocaleDateString(
    "en-IN",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    },
  );

  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [playing, setPlaying] = useState(false);
  const [captureError, setCaptureError] = useState(false);
  const hiddenVideoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const video = hiddenVideoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const handleSeeked = () => {
      try {
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        canvas.width = video.videoWidth || 320;
        canvas.height = video.videoHeight || 568;
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL("image/jpeg", 0.85);
        setThumbnail(dataUrl);
      } catch {
        setCaptureError(true);
      }
    };

    const handleLoadedData = () => {
      try {
        video.currentTime = 0.1;
      } catch {
        setCaptureError(true);
      }
    };

    const handleError = () => {
      setCaptureError(true);
    };

    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("seeked", handleSeeked);
    video.addEventListener("error", handleError);

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("seeked", handleSeeked);
      video.removeEventListener("error", handleError);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className="section-card overflow-hidden group"
      data-ocid={`fan-edits.item.${index + 1}`}
    >
      <div className="aspect-[9/16] bg-gray-100 overflow-hidden relative">
        {/* Hidden video + canvas for thumbnail capture */}
        <video
          ref={hiddenVideoRef}
          src={videoUrl}
          crossOrigin="anonymous"
          preload="metadata"
          muted
          playsInline
          tabIndex={-1}
          className="absolute opacity-0 pointer-events-none w-1 h-1"
        />
        <canvas ref={canvasRef} className="hidden" />

        {playing ? (
          // biome-ignore lint/a11y/useMediaCaption: fan-edit videos are user-submitted without transcripts
          <video
            src={videoUrl}
            controls
            autoPlay
            className="w-full h-full object-cover"
          />
        ) : thumbnail ? (
          <>
            <img
              src={thumbnail}
              alt={edit.title}
              className="w-full h-full object-cover"
            />
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="absolute inset-0 flex items-center justify-center group/play"
              aria-label="Play video"
              data-ocid={`fan-edits.play.button.${index + 1}`}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-200 group-hover/play:scale-110"
                style={{
                  background: "linear-gradient(135deg, #F4BFC9, #D8BFA3)",
                  boxShadow: "0 4px 20px rgba(244,191,201,0.6)",
                }}
              >
                <Play className="w-6 h-6 ml-0.5" style={{ color: "#2B2B2B" }} />
              </div>
            </button>
          </>
        ) : captureError ? (
          // Fallback: show video directly
          // biome-ignore lint/a11y/useMediaCaption: fan-edit videos are user-submitted without transcripts
          <video
            src={videoUrl}
            controls
            className="w-full h-full object-cover"
            preload="metadata"
          />
        ) : (
          // Loading state while capturing thumbnail
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-sm text-foreground line-clamp-2 mb-1">
          {edit.title}
        </h3>
        <p className="text-xs text-muted-foreground">by {edit.submitterName}</p>
        <p className="text-xs text-muted-foreground mt-0.5">{date}</p>
      </div>
    </motion.div>
  );
}

function SubmitForm({ onSuccess }: { onSuccess: () => void }) {
  const { actor, isFetching } = useActor();
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<
    "idle" | "uploading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor || !file || !title.trim() || !name.trim()) return;

    try {
      setStatus("uploading");
      setProgress(0);

      const arrayBuffer = await file.arrayBuffer();
      const bytes = new Uint8Array(arrayBuffer);

      const blob = ExternalBlob.fromBytes(bytes).withUploadProgress((pct) => {
        setProgress(pct);
      });

      await actor.submitFanEdit(title.trim(), name.trim(), blob);

      setStatus("success");
      setTitle("");
      setName("");
      setFile(null);
      if (fileRef.current) fileRef.current.value = "";
      onSuccess();
    } catch (err) {
      console.error(err);
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  const isLoading = status === "uploading";

  return (
    <div
      className="max-w-lg mx-auto mt-14 rounded-3xl p-8"
      style={{
        background: "white",
        boxShadow:
          "0 4px 32px -4px rgba(244,191,201,0.25), 0 1px 8px rgba(0,0,0,0.05)",
      }}
      data-ocid="fan-edits.submit.panel"
    >
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-10 h-10 rounded-2xl flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #F4BFC9, #F2E3D8)" }}
        >
          <Film className="w-5 h-5" style={{ color: "#2B2B2B" }} />
        </div>
        <div>
          <h3 className="font-bold text-foreground">Submit Your Fan Edit</h3>
          <p className="text-xs text-muted-foreground">
            Your edit will be reviewed before going live
          </p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col items-center gap-3 py-8 text-center"
            data-ocid="fan-edits.success_state"
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #F4BFC9, #F2E3D8)",
              }}
            >
              <Heart className="w-7 h-7" style={{ color: "#2B2B2B" }} />
            </div>
            <p className="font-semibold text-foreground">
              Your fan edit has been submitted for review!
            </p>
            <p className="text-sm text-muted-foreground">
              Neha will approve it soon 🤍
            </p>
            <button
              type="button"
              className="text-sm underline mt-2"
              style={{ color: "oklch(0.84 0.065 10)" }}
              onClick={() => setStatus("idle")}
            >
              Submit another
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="space-y-1.5">
              <Label htmlFor="fe-title" className="text-sm font-medium">
                Title
              </Label>
              <Input
                id="fe-title"
                placeholder="Give your edit a title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                disabled={isLoading}
                data-ocid="fan-edits.title.input"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="fe-name" className="text-sm font-medium">
                Your Name
              </Label>
              <Input
                id="fe-name"
                placeholder="Your name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={isLoading}
                data-ocid="fan-edits.name.input"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="fe-video" className="text-sm font-medium">
                Video File
              </Label>
              {/* biome-ignore lint/a11y/useKeyWithClickEvents: file input is hidden; click proxies to input */}
              <div
                className="border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-colors duration-200"
                style={{
                  borderColor: file
                    ? "oklch(0.84 0.065 10 / 0.5)"
                    : "oklch(0.93 0.015 35)",
                  background: file
                    ? "oklch(0.84 0.065 10 / 0.04)"
                    : "transparent",
                }}
                onClick={() => fileRef.current?.click()}
                data-ocid="fan-edits.dropzone"
              >
                <Upload className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
                {file ? (
                  <p className="text-sm text-foreground font-medium">
                    {file.name}
                  </p>
                ) : (
                  <>
                    <p className="text-sm text-muted-foreground">
                      Click to select a video
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      MP4, MOV, WEBM supported
                    </p>
                  </>
                )}
                <input
                  ref={fileRef}
                  id="fe-video"
                  type="file"
                  accept="video/*"
                  className="hidden"
                  onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                  required
                  disabled={isLoading}
                  data-ocid="fan-edits.upload_button"
                />
              </div>
            </div>

            {isLoading && (
              <div className="space-y-1.5" data-ocid="fan-edits.loading_state">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Uploading video...</span>
                  <span>{`${Math.round(progress)}%`}</span>
                </div>
                <Progress value={progress} className="h-1.5" />
              </div>
            )}

            {status === "error" && (
              <p
                className="text-sm px-3 py-2 rounded-xl"
                style={{
                  background: "oklch(0.97 0.01 10)",
                  color: "oklch(0.5 0.2 15)",
                }}
                data-ocid="fan-edits.error_state"
              >
                {errorMsg}
              </p>
            )}

            <Button
              type="submit"
              disabled={isLoading || !file || !actor || isFetching}
              className="w-full rounded-2xl font-semibold py-6"
              style={{
                background: "linear-gradient(135deg, #F4BFC9, #F2E3D8)",
                color: "#2B2B2B",
                boxShadow: "0 4px 16px rgba(244,191,201,0.4)",
              }}
              data-ocid="fan-edits.submit_button"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Uploading...
                </>
              ) : !actor || isFetching ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Loading...
                </>
              ) : (
                "Submit Fan Edit"
              )}
            </Button>

            {(!actor || isFetching) && (
              <p className="text-xs text-center text-muted-foreground">
                Connecting to network...
              </p>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function AdminSetupForm({ onSetupDone }: { onSetupDone: () => void }) {
  const { actor } = useActor();
  const [token, setToken] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSetup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor || !token.trim()) return;
    setStatus("loading");
    try {
      await actor._initializeAccessControlWithSecret(token.trim());
      onSetupDone();
    } catch (err) {
      console.error(err);
      setErrorMsg("Invalid token or setup failed. Check your admin token.");
      setStatus("error");
    }
  };

  return (
    <div className="space-y-4">
      <div
        className="flex items-start gap-3 p-4 rounded-2xl"
        style={{
          background: "oklch(0.97 0.01 60)",
          border: "1px solid oklch(0.93 0.015 35)",
        }}
      >
        <Key
          className="w-4 h-4 mt-0.5 flex-shrink-0"
          style={{ color: "oklch(0.55 0.055 65)" }}
        />
        <div className="text-sm" style={{ color: "oklch(0.45 0.04 60)" }}>
          <p className="font-semibold mb-0.5">First-time admin setup</p>
          <p>
            Enter your admin token to register as admin. You can find this token
            in your Caffeine project settings under{" "}
            <strong>Environment Variables</strong> →{" "}
            <code className="text-xs bg-black/5 px-1 py-0.5 rounded">
              CAFFEINE_ADMIN_TOKEN
            </code>
            .
          </p>
        </div>
      </div>
      <form onSubmit={handleSetup} className="space-y-3">
        <Input
          type="password"
          placeholder="Enter admin token..."
          value={token}
          onChange={(e) => setToken(e.target.value)}
          disabled={status === "loading"}
          data-ocid="fan-edits.admin.token_input"
        />
        {status === "error" && (
          <p className="text-sm" style={{ color: "oklch(0.5 0.2 15)" }}>
            {errorMsg}
          </p>
        )}
        <Button
          type="submit"
          disabled={status === "loading" || !token.trim()}
          className="w-full rounded-xl"
          style={{
            background: "linear-gradient(135deg, #F4BFC9, #F2E3D8)",
            color: "#2B2B2B",
          }}
          data-ocid="fan-edits.admin.setup_button"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Setting up...
            </>
          ) : (
            "Confirm & Become Admin"
          )}
        </Button>
      </form>
    </div>
  );
}

function AdminPanel({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  const { data: pending = [], isLoading } = usePendingFanEdits();

  const approveMutation = useMutation({
    mutationFn: async (id: bigint) => {
      if (!actor) throw new Error("No actor");
      await actor.approveFanEdit(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pendingFanEdits"] });
      queryClient.invalidateQueries({ queryKey: ["approvedFanEdits"] });
    },
  });

  const rejectMutation = useMutation({
    mutationFn: async (id: bigint) => {
      if (!actor) throw new Error("No actor");
      await actor.rejectFanEdit(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pendingFanEdits"] });
    },
  });

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent
        className="max-w-2xl max-h-[80vh] overflow-y-auto"
        data-ocid="fan-edits.admin.dialog"
      >
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ShieldCheck
              className="w-5 h-5"
              style={{ color: "oklch(0.84 0.065 10)" }}
            />
            Admin — Pending Fan Edits
          </DialogTitle>
        </DialogHeader>

        {isLoading ? (
          <div
            className="flex justify-center py-10"
            data-ocid="fan-edits.admin.loading_state"
          >
            <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
          </div>
        ) : pending.length === 0 ? (
          <div
            className="text-center py-12 text-muted-foreground"
            data-ocid="fan-edits.admin.empty_state"
          >
            <Film className="w-10 h-10 mx-auto mb-3 opacity-30" />
            <p className="font-medium">No pending submissions</p>
            <p className="text-sm mt-1">All caught up! ✨</p>
          </div>
        ) : (
          <div className="space-y-4">
            {pending.map((edit, i) => (
              <div
                key={String(edit.id)}
                className="rounded-2xl border p-4 flex gap-4"
                style={{ borderColor: "oklch(0.93 0.015 35)" }}
                data-ocid={`fan-edits.admin.item.${i + 1}`}
              >
                <div className="w-28 flex-shrink-0 aspect-[9/16] bg-gray-100 rounded-xl overflow-hidden">
                  {/* biome-ignore lint/a11y/useMediaCaption: admin-preview; user-submitted content */}
                  <video
                    src={edit.videoId.getDirectURL()}
                    controls
                    className="w-full h-full object-cover"
                    preload="metadata"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-foreground truncate">
                    {edit.title}
                  </p>
                  <p className="text-xs text-muted-foreground mb-3">
                    by {edit.submitterName}
                  </p>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      onClick={() => approveMutation.mutate(edit.id)}
                      disabled={
                        approveMutation.isPending || rejectMutation.isPending
                      }
                      className="rounded-xl flex-1"
                      style={{
                        background: "linear-gradient(135deg, #F4BFC9, #F2E3D8)",
                        color: "#2B2B2B",
                      }}
                      data-ocid={`fan-edits.admin.approve_button.${i + 1}`}
                    >
                      {approveMutation.isPending ? (
                        <Loader2 className="w-3 h-3 animate-spin" />
                      ) : (
                        <Check className="w-3 h-3 mr-1" />
                      )}
                      Approve
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => rejectMutation.mutate(edit.id)}
                      disabled={
                        approveMutation.isPending || rejectMutation.isPending
                      }
                      className="rounded-xl flex-1"
                      data-ocid={`fan-edits.admin.reject_button.${i + 1}`}
                    >
                      <X className="w-3 h-3 mr-1" />
                      Reject
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

// Admin login dialog — handles both first-time setup and returning admins
function AdminLoginDialog({
  open,
  onClose,
  isAdmin,
  onAdminReady,
}: {
  open: boolean;
  onClose: () => void;
  isAdmin: boolean | undefined;
  onAdminReady: () => void;
}) {
  const queryClient = useQueryClient();

  const handleSetupDone = () => {
    queryClient.invalidateQueries({ queryKey: ["isCallerAdmin"] });
    onAdminReady();
  };

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent
        className="max-w-md"
        data-ocid="fan-edits.admin.login_dialog"
      >
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ShieldCheck
              className="w-5 h-5"
              style={{ color: "oklch(0.84 0.065 10)" }}
            />
            Admin Access
          </DialogTitle>
        </DialogHeader>

        {isAdmin === undefined ? (
          <div className="flex justify-center py-8">
            <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
          </div>
        ) : isAdmin ? (
          <div className="text-center py-6 space-y-3">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mx-auto"
              style={{
                background: "linear-gradient(135deg, #F4BFC9, #F2E3D8)",
              }}
            >
              <Check className="w-7 h-7" style={{ color: "#2B2B2B" }} />
            </div>
            <p className="font-semibold">You're logged in as Admin</p>
            <Button
              className="w-full rounded-xl"
              style={{
                background: "linear-gradient(135deg, #F4BFC9, #F2E3D8)",
                color: "#2B2B2B",
              }}
              onClick={() => {
                onClose();
                onAdminReady();
              }}
            >
              Open Admin Panel
            </Button>
          </div>
        ) : (
          <AdminSetupForm onSetupDone={handleSetupDone} />
        )}
      </DialogContent>
    </Dialog>
  );
}

export function FanEdits() {
  const { login, clear, identity, loginStatus } = useInternetIdentity();
  const { actor, isFetching: actorFetching } = useActor();
  const queryClient = useQueryClient();
  const isAuthenticated = !!identity;
  const [adminPanelOpen, setAdminPanelOpen] = useState(false);
  const [adminLoginOpen, setAdminLoginOpen] = useState(false);

  const { data: isAdmin } = useQuery<boolean>({
    queryKey: ["isCallerAdmin"],
    queryFn: async () => {
      if (!actor) return false;
      try {
        return await actor.isCallerAdmin();
      } catch {
        // User not registered yet
        return false;
      }
    },
    enabled: !!actor && !actorFetching && isAuthenticated,
  });

  const { data: approved = [], isLoading } = useApprovedFanEdits();

  const handleAdminClick = async () => {
    if (!isAuthenticated) {
      try {
        await login();
        // After login, show admin login dialog
        setAdminLoginOpen(true);
      } catch (e) {
        console.error(e);
      }
    } else if (isAdmin) {
      setAdminPanelOpen(true);
    } else {
      setAdminLoginOpen(true);
    }
  };

  const handleLogout = async () => {
    await clear();
    queryClient.clear();
    setAdminPanelOpen(false);
    setAdminLoginOpen(false);
  };

  return (
    <section
      id="fan-edits"
      className="py-20"
      style={{ background: "oklch(0.99 0.007 60)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header + admin controls */}
        <div className="relative">
          <SectionHeader
            heading="Fan Love"
            sub="Made with love by the community 🤍"
          />

          {/* Admin controls — top right */}
          <div className="absolute top-0 right-0 flex items-center gap-2">
            {isAuthenticated && isAdmin && (
              <>
                <button
                  type="button"
                  onClick={() => setAdminPanelOpen(true)}
                  className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl transition-all duration-200 hover:opacity-90"
                  style={{
                    background: "linear-gradient(135deg, #F4BFC9, #F2E3D8)",
                    color: "#2B2B2B",
                    boxShadow: "0 2px 8px rgba(244,191,201,0.4)",
                  }}
                  data-ocid="fan-edits.admin.open_modal_button"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Review Submissions
                </button>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors px-3 py-2 rounded-xl border"
                  style={{ borderColor: "oklch(0.93 0.015 35)" }}
                  data-ocid="fan-edits.admin.logout_button"
                >
                  <LogOut className="w-3 h-3" />
                  Logout
                </button>
              </>
            )}
            {(!isAuthenticated || !isAdmin) && (
              <button
                type="button"
                onClick={handleAdminClick}
                disabled={loginStatus === "logging-in"}
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-xl border"
                style={{ borderColor: "oklch(0.93 0.015 35)" }}
                data-ocid="fan-edits.admin.login_button"
              >
                {loginStatus === "logging-in" ? (
                  <Loader2 className="w-3 h-3 animate-spin" />
                ) : (
                  <ShieldCheck className="w-3 h-3" />
                )}
                Admin
              </button>
            )}
          </div>
        </div>

        {/* Video grid */}
        {isLoading ? (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
            data-ocid="fan-edits.loading_state"
          >
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-3xl overflow-hidden animate-pulse"
                style={{ background: "oklch(0.96 0.01 40)" }}
              >
                <div className="aspect-[9/16]" />
                <div className="p-4 space-y-2">
                  <div
                    className="h-4 rounded-full"
                    style={{ background: "oklch(0.93 0.015 35)", width: "70%" }}
                  />
                  <div
                    className="h-3 rounded-full"
                    style={{ background: "oklch(0.93 0.015 35)", width: "40%" }}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : approved.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center gap-4 py-20 text-center"
            data-ocid="fan-edits.empty_state"
          >
            <div
              className="w-16 h-16 rounded-3xl flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #F4BFC9, #F2E3D8)",
              }}
            >
              <Film className="w-8 h-8" style={{ color: "#2B2B2B" }} />
            </div>
            <p className="font-semibold text-foreground">No fan edits yet</p>
            <p className="text-sm text-muted-foreground max-w-xs">
              Be the first to submit a fan edit! Neha loves seeing your creative
              work 🎬
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {approved.map((edit, i) => (
              <VideoCard key={String(edit.id)} edit={edit} index={i} />
            ))}
          </div>
        )}

        {/* Submission form */}
        <SubmitForm onSuccess={() => {}} />
      </div>

      {/* Admin login/setup dialog */}
      <AdminLoginDialog
        open={adminLoginOpen}
        onClose={() => setAdminLoginOpen(false)}
        isAdmin={isAuthenticated ? isAdmin : undefined}
        onAdminReady={() => {
          setAdminLoginOpen(false);
          setAdminPanelOpen(true);
        }}
      />

      {/* Admin panel dialog */}
      <AdminPanel
        open={adminPanelOpen}
        onClose={() => setAdminPanelOpen(false)}
      />
    </section>
  );
}
