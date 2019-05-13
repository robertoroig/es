import {Section} from './section';

export class Project {
  $key: string;
  name: string;
  brief: string;
  description: string;
  path: string;
  sections: Section[];
}
