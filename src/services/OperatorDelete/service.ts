import { IOperatorsRepository } from '~/repositories/IOperatorsRepository';

interface IOperatorUpdateServiceDTO {
  id: string;
}

export class OperatorDeleteService {
  constructor(private repository: IOperatorsRepository) {}

  async execute(data: IOperatorUpdateServiceDTO) {
    await this.repository.delete(data.id);
  }
}
