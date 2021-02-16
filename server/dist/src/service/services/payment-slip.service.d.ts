import { CreatePaymentSlipDto } from '../../api/dto/payment-slip/create-payment-slip.dto';
import { UpdatePaymentSlipDto } from '../../api/dto/payment-slip/update-payment-slip.dto';
import { Repository } from 'typeorm';
import { PaymentSlip } from '../../entities/payment-slip.entity';
export declare class PaymentSlipService {
    private paymentSlipRepository;
    constructor(paymentSlipRepository: Repository<PaymentSlip>);
    create(createPaymentSlipDto: CreatePaymentSlipDto): Promise<PaymentSlip>;
    createMany(createPaymentSlipDtos: CreatePaymentSlipDto[]): Promise<import("typeorm").InsertResult>;
    findAll(): Promise<any[]>;
    findOne(id: number): Promise<PaymentSlip>;
    update(id: number, updatePaymentSlipDto: UpdatePaymentSlipDto): Promise<{
        isp_id: number;
        id: number;
        customer_id: number;
        month: number;
        year: number;
        model: string;
        pnb: string;
        amount: number;
        description: string;
        customer: import("../../entities/customer.entity").Customer;
        isp: import("../../entities/isp.entity").Isp;
        inserted_at: Date;
        updated_at: Date;
        deleted: Date;
        poziv_na_broj_platitelja: string;
        poziv_na_broj_primatelja: string;
        iznos: string;
        iban_primatelja: string;
        iban_platitelja: string;
        model_primatelja: string;
        model_platitelja: string;
        sifra_namjene: string;
        datum_izvrsenja: string;
        valuta_placanja: string;
        hitno: string;
        ime_i_prezime_platitelja: string;
        ulica_i_broj_platitelja: string;
        ulica_i_broj_primatelja: string;
        postanski_i_grad_platitelja: string;
        postanski_i_grad_primatelja: string;
        naziv_primatelja: string;
        opis_placanja: string;
        nalog: string;
    } & PaymentSlip>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
