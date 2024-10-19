
import { intro, outro, cancel, group, select, text } from '@clack/prompts';
import setup from './setup';

import  { type Requirements } from './interface';


intro("Welcome to Uday's CLI")

const requirements = await group({

  projectName: ({results}) => text({
    message: "What is the name of your project? (Leave blank if this path is project file)",
    placeholder: "my-project"
  }),

  useSrc: ({results}) => select({
    message: "Do you want to use src as root dir?",
    options: [
      {value: true, label: "Yes"},
      {value: false, label: "No"}
    ]
  }),

  useTs: ({results}) => select({
    message: "Do you want to use Typescript?",
    options: [
      {value: true, label: "Yes"},
      {value: false, label: "No"}
    ]
  }),

  useAxios: ({results}) => select({
    message: "Do you want to use Axios??",
    options: [
      {value: true, label: "Yes"},
      {value: false, label: "No"}
    ]
  }),
},{
  onCancel: ({results}) => {
    cancel("Operation cancelled");
    process.exit(0);
  }
}) as Requirements;

setup(requirements)

outro("Thanks for using this CLI")
