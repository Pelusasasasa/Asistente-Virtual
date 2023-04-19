import { BaseOutput, Output } from '@jovotech/framework';

@Output()
export class YesNoOutput extends BaseOutput {
  build() {
    return {
      quickReplies: ['yes', 'no'],
      listen: true,
    };
  }
}
