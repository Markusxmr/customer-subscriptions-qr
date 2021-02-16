import { CustomerService } from '../../service/services/customer.service';
import { Customer } from '../../entities/customer.entity';
import { CreateCustomerInput } from '../dto/customer/create-customer.input';
import { UpdateCustomerInput } from '../dto/customer/update-customer.input';
export declare class CustomerResolver {
    private readonly customerService;
    constructor(customerService: CustomerService);
    createCustomer(createCustomerInput: CreateCustomerInput): Promise<{
        id: number;
        šifra: number;
        naziv: string;
        adresa: string;
        država: string;
        pošta: number;
        mjesto: string;
        porezni_obveznik: string;
        oib: number;
        matični_broj: number;
        šifra_djelatnosti: string;
        identifikacijski_broj: number;
        novčana_jedinica: string;
        dani_za_dospijeće: string;
        postotak_rabata: string;
        internet_stranica: string;
        transakcijski_račun: string;
        ime_prezime_kontakta: string;
        telefon: string;
        elektronska_pošta: string;
        naziv_za_slanje: string;
        adresa_za_slanje: string;
        država_za_slanje: string;
        pošta_za_slanje: string;
        mjesto_pošte_za_slanje: string;
        naziv_primatelja: string;
        adresa_primatelja: string;
        država_primatelja: string;
        pošta_primatelja: string;
        mjesto_primatelja: string;
        paymentSlips: import("../../entities/payment-slip.entity").PaymentSlip[];
        inserted_at: Date;
        updated_at: Date;
    } & Customer>;
    findAll(): Promise<Customer[]>;
    findOne(id: number): Promise<any>;
    updateCustomer(updateCustomerInput: UpdateCustomerInput): Promise<any>;
    removeCustomer(id: number): Promise<import("typeorm").DeleteResult>;
}
