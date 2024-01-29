import { Command, CommandRunner, Option } from 'nest-commander';

interface BasicCommandOptions {
  string?: string;
  number?: number;
}

// create command with Command decorator and give name of command
@Command({ name: 'basic', description: 'A parameter parse' })
export class BasicCommand extends CommandRunner {
  constructor() {
    super();
  }

  async run(
    passedParam: string[],
    options?: BasicCommandOptions,
  ): Promise<void> {
    if (options?.number) {
      this.runWithNumber(passedParam, options.number);
    } else if (options?.string) {
      this.runWithString(passedParam, options.string);
    } else {
      this.runWithNone(passedParam);
    }
  }

  // create Optional parameter with Option Decorators
  @Option({
    flags: '-n, --number [number]',
    description: 'A basic number parser',
  })
  parseNumber(val: string): number {
    return Number(val);
  }

  @Option({
    flags: '-s, --string [string]',
    description: 'A string return',
  })
  parseString(val: string): string {
    return val;
  }

  runWithString(param: string[], option: string): void {
    console.log('Print String Option---', { param, string: option });
  }

  runWithNumber(param: string[], option: number): void {
    console.log('Print Number Option--', { param, number: option });
  }

  runWithNone(param: string[]): void {
    console.log({ param });
  }
}
