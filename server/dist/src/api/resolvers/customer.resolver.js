"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const customer_service_1 = require("../../service/services/customer.service");
const customer_entity_1 = require("../../entities/customer.entity");
const create_customer_input_1 = require("../dto/customer/create-customer.input");
const update_customer_input_1 = require("../dto/customer/update-customer.input");
let CustomerResolver = class CustomerResolver {
    constructor(customerService) {
        this.customerService = customerService;
    }
    createCustomer(createCustomerInput) {
        return this.customerService.create(createCustomerInput);
    }
    findAll() {
        return this.customerService.findAll();
    }
    findOne(id) {
        return this.customerService.findOne(id);
    }
    updateCustomer(updateCustomerInput) {
        return this.customerService.update(updateCustomerInput.id, updateCustomerInput);
    }
    removeCustomer(id) {
        return this.customerService.remove(id);
    }
};
__decorate([
    graphql_1.Mutation(() => customer_entity_1.Customer),
    __param(0, graphql_1.Args('createCustomerInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_customer_input_1.CreateCustomerInput]),
    __metadata("design:returntype", void 0)
], CustomerResolver.prototype, "createCustomer", null);
__decorate([
    graphql_1.Query(() => [customer_entity_1.Customer], { name: 'customer' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CustomerResolver.prototype, "findAll", null);
__decorate([
    graphql_1.Query(() => customer_entity_1.Customer, { name: 'customer' }),
    __param(0, graphql_1.Args('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CustomerResolver.prototype, "findOne", null);
__decorate([
    graphql_1.Mutation(() => customer_entity_1.Customer),
    __param(0, graphql_1.Args('updateCustomerInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_customer_input_1.UpdateCustomerInput]),
    __metadata("design:returntype", void 0)
], CustomerResolver.prototype, "updateCustomer", null);
__decorate([
    graphql_1.Mutation(() => customer_entity_1.Customer),
    __param(0, graphql_1.Args('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CustomerResolver.prototype, "removeCustomer", null);
CustomerResolver = __decorate([
    graphql_1.Resolver(() => customer_entity_1.Customer),
    __metadata("design:paramtypes", [customer_service_1.CustomerService])
], CustomerResolver);
exports.CustomerResolver = CustomerResolver;
//# sourceMappingURL=customer.resolver.js.map