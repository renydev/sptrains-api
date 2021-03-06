import { Line } from '~/entities/Line';

import { ILinesRepository } from '~/repositories/ILinesRepository';

interface ILineCreateServiceDTO {
  number: number;
  name: string;
  active: boolean;
  operatorId: string;
}

export class LineCreateService {
  constructor(private repository: ILinesRepository) {}

  async execute(data: ILineCreateServiceDTO) {
    if(await this.repository.findByNumber(data.number)) {
      throw new Error('Line already exists.');
    }

    const line = await this.repository.save(new Line(data));

    return line;
  }
}
