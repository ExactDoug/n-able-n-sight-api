/** Patch item from patch_list_all */
export interface Patch {
  patchid: number;
  [key: string]: unknown;
}

/** Patch action response (approve, ignore, do_nothing, reprocess, retry) */
export interface PatchActionResponse {
  [key: string]: unknown;
}
