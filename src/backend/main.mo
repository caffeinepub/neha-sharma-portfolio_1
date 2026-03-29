import Iter "mo:core/Iter";
import Map "mo:core/Map";
import Time "mo:core/Time";
import Text "mo:core/Text";

import Runtime "mo:core/Runtime";
import Nat "mo:core/Nat";
import Storage "blob-storage/Storage";
import MixinStorage "blob-storage/Mixin";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";


actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);
  include MixinStorage();

  // Fan edits
  type FanEditId = Nat;
  type Status = { #pending; #approved; #rejected };
  type FanEdit = {
    id : FanEditId;
    title : Text;
    submitterName : Text;
    videoId : Storage.ExternalBlob;
    status : Status;
    createdAt : Int;
  };

  var nextFanEditId = 0;
  let fanEdits = Map.empty<FanEditId, FanEdit>();

  // Submitting a new fan edit (unauthenticated)
  public shared ({ caller }) func submitFanEdit(title : Text, submitterName : Text, videoId : Storage.ExternalBlob) : async FanEditId {
    let id = nextFanEditId;
    let fanEdit : FanEdit = {
      id;
      title;
      submitterName;
      videoId;
      status = #pending;
      createdAt = Time.now();
    };
    fanEdits.add(id, fanEdit);
    nextFanEditId += 1;
    id;
  };

  // Querying approved fan edits (public)
  public query ({ caller }) func getApprovedFanEdits() : async [FanEdit] {
    fanEdits.values().filter(func(fe) { fe.status == #approved }).toArray();
  };

  // Querying all pending fan edits (admin)
  public query ({ caller }) func getPendingFanEdits() : async [FanEdit] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view pending fan edits");
    };
    fanEdits.values().filter(func(fe) { fe.status == #pending }).toArray();
  };

  // Approving or rejecting a fan edit (admin)
  public shared ({ caller }) func updateFanEditStatus(fanEditId : FanEditId, newStatus : Status) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can update fan edit status");
    };
    switch (fanEdits.get(fanEditId)) {
      case (null) { Runtime.trap("Fan edit not found") };
      case (?fanEdit) {
        let updatedFanEdit = { fanEdit with status = newStatus };
        fanEdits.add(fanEditId, updatedFanEdit);
      };
    };
  };

  // Helper functions for approve/reject
  public shared ({ caller }) func approveFanEdit(fanEditId : FanEditId) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can approve fan edits");
    };
    switch (fanEdits.get(fanEditId)) {
      case (null) { Runtime.trap("Fan edit not found") };
      case (?fanEdit) {
        let updatedFanEdit = { fanEdit with status = #approved };
        fanEdits.add(fanEditId, updatedFanEdit);
      };
    };
  };

  public shared ({ caller }) func rejectFanEdit(fanEditId : FanEditId) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can reject fan edits");
    };
    switch (fanEdits.get(fanEditId)) {
      case (null) { Runtime.trap("Fan edit not found") };
      case (?fanEdit) {
        let updatedFanEdit = { fanEdit with status = #rejected };
        fanEdits.add(fanEditId, updatedFanEdit);
      };
    };
  };

  // Deleting a fan edit (admin)
  public shared ({ caller }) func deleteFanEdit(fanEditId : FanEditId) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can delete fan edits");
    };
    if (not fanEdits.containsKey(fanEditId)) {
      Runtime.trap("Fan edit not found");
    };
  };
};
