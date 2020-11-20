
export class Transaction {
    constructor(
        public transaction_id ?: number , public seller_id ?: number , public offer_id ?: number,
        public title ?: string , public fees ?: number,public created_at ?: string,
        public updated_at ?: string 
        ){

        }
}