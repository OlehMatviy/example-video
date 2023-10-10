interface IMyWhy {
  created: string;
  myWhy: string;
  id: string;
}

interface IMyWhyCreate {
  myWhy: string;
}

interface IMyWhyEdit {
  myWhy: string;
  id: string;
}

interface IMyWhyRemove {
  id: string;
}

export type { IMyWhy, IMyWhyCreate, IMyWhyEdit, IMyWhyRemove };
