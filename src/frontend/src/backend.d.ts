import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export class ExternalBlob {
    getBytes(): Promise<Uint8Array<ArrayBuffer>>;
    getDirectURL(): string;
    static fromURL(url: string): ExternalBlob;
    static fromBytes(blob: Uint8Array<ArrayBuffer>): ExternalBlob;
    withUploadProgress(onProgress: (percentage: number) => void): ExternalBlob;
}
export type FanEditId = bigint;
export interface FanEdit {
    id: FanEditId;
    status: Status;
    title: string;
    submitterName: string;
    createdAt: bigint;
    videoId: ExternalBlob;
}
export enum Status {
    pending = "pending",
    approved = "approved",
    rejected = "rejected"
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    _initializeAccessControlWithSecret(userSecret: string): Promise<void>;
    approveFanEdit(fanEditId: FanEditId): Promise<void>;
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    deleteFanEdit(fanEditId: FanEditId): Promise<void>;
    getApprovedFanEdits(): Promise<Array<FanEdit>>;
    getCallerUserRole(): Promise<UserRole>;
    getPendingFanEdits(): Promise<Array<FanEdit>>;
    isCallerAdmin(): Promise<boolean>;
    rejectFanEdit(fanEditId: FanEditId): Promise<void>;
    submitFanEdit(title: string, submitterName: string, videoId: ExternalBlob): Promise<FanEditId>;
    updateFanEditStatus(fanEditId: FanEditId, newStatus: Status): Promise<void>;
}
