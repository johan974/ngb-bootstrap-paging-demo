export class PagedSource {
  public rowCount = 1;
  public reset = false;
  constructor( public pageNumber: number, public pageSize: number, public pageDirection: boolean) { }
}
