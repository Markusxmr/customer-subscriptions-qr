import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePaymentSlipDto } from '../../api/dto/payment-slip/create-payment-slip.dto';
import { UpdatePaymentSlipDto } from '../../api/dto/payment-slip/update-payment-slip.dto';
import { Repository, getManager } from 'typeorm';
import { PaymentSlip } from '../../entities/payment-slip.entity';
import { dto } from '../helpers/dto';

@Injectable()
export class PaymentSlipService {
  constructor(
    @Inject('PAYMENT_SLIP_REPOSITORY')
    private paymentSlipRepository: Repository<PaymentSlip>,
  ) {}

  create(createPaymentSlipDto: CreatePaymentSlipDto) {
    let item = new PaymentSlip();
    item = { ...item, ...createPaymentSlipDto };
    return this.paymentSlipRepository.save(item);
  }

  createMany(createPaymentSlipDtos: CreatePaymentSlipDto[]) {
    let items = [];
    for (const item of createPaymentSlipDtos) {
      items.push(item);
    }
    return this.paymentSlipRepository.insert(items);
  }

  async findAll() {
    const items = await getManager().query(
      `select * from payment_slips order by id desc`,
    );
    return dto(items, ['inserted_at', 'updated_at']);
  }

  findOne(id: number) {
    return this.paymentSlipRepository.findOne(id);
  }

  async update(id: number, updatePaymentSlipDto: UpdatePaymentSlipDto) {
    let item = await this.findOne(id);
    if (!item) throw new NotFoundException();
    return this.paymentSlipRepository.save({
      ...item,
      ...updatePaymentSlipDto,
    });
  }

  async remove(id: number) {
    if (!id) throw new NotFoundException('Id not provided');
    let item = await this.findOne(id);
    if (!item) throw new NotFoundException();
    return this.paymentSlipRepository.delete(item.id);
  }
}
