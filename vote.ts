export class Vote {
	private id: number;
	private userid: number;
	private linkid: number;
	private vote: boolean;
  constructor(id: number, userid: number, linkid: number, vote: boolean) 
   { 
     this.id = id; 
	 this.userid = userid;
	 this.linkid = linkid;
	 this.vote = vote; 
	}	 
}