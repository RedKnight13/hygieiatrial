
//works in strict mode
'use strict'

//require the handler module.
//declaring a constant variable.
const { TransactionHandler } = require('sawtooth-sdk/processor/handler')


const {
  InvalidTransaction,
  InternalError
} = require('sawtooth-sdk/processor/exceptions')
const crypto = require('crypto')
const {TextEncoder, TextDecoder} = require('text-encoding/lib/encoding')

const _hash = (x) => crypto.createHash('sha512').update(x).digest('hex').toLowerCase().substring(0, 64)
var encoder = new TextEncoder('utf8')
var decoder = new TextDecoder('utf8')
const MIN_VALUE = 0
const CJ_FAMILY = 'hygieia'
const CJ_NAMESPACE = _hash(CJ_FAMILY).substring(0, 6)


class HygieiaHandler extends TransactionHandler{

    constructor(){
      super(CJ_FAMILY,['1.0'],[CJ_NAMESPACE])
      console.log("Inside construcotu")
    }

    decodepayload(payload){
  
        var  payloadDecoded= {
          bgroup:payload[0],
          part: payload[1],
          Gender: payload[2],
          idNo: payload[3],
          Date:payload[4],
          name:payload[5],
          proc:payload[6]
        }
        return payloadDecoded
      }

    apply(transacationProcessRequest,context){

      var newTxnId =''
      var newStatus = ''
      console.log("HelloWorldlkfkhdkfshfgs!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
             //payload decoding*****
           let payload = transacationProcessRequest.payload.toString().split(',')
            console.log("HelloWorldlkfkhdkfshfgs!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
            let pl=this.decodepayload(payload);
            console.log(pl.bgroup+","+pl.part +","+pl.Gender +","+ pl.idNo+ ","+pl.Date +","+ pl.name+ ","+ pl.proc)

            //address generation*****************
            let signerPk=transacationProcessRequest.header.signerPublicKey;
            console.log(signerPk.toString())
            const publicKeyHash= _hash(signerPk)
            let header=transacationProcessRequest.header
            let pblckey=header.signerPublicKey//_hash('hygieia').substring(0,6)+_hash(pl.part)+_hash(pl.bgroup)+publicKeyHash
            
            
        
            
            let address=_hash("hygieia").substr(0, 6) + _hash(pblckey).substr(0, 64);
            
            
            
            console.log(pl.bgroup+pl.part +pl.Gender + pl.idNo+pl.Date+pl.name+pl.proc);
            

            return context.getState([address])
            .then((currentStateMap)=>{
              const myState = currentStateMap[address];
              var oldstate= decoder.decode(myState);

              if(myState == '' || myState == null) {  ///first time baking
                newTxnId="Txn001";
                newStatus="Unmatched";

              } 
               else {
                newTxnId="Txn001";
                 newStatus="Matched"
                    
              
              }
               /* newTxnId=pl.part;
                newStatus=pl.bgroup;

                console.log("newQuantity",newStatus)  

                console.log("",newStatus+":"+newTxnId)    
                
                
                
                console.log(stateData.Status+stateData.Txnid+"statedata")
                console.log(JSON.stringify(stateData),"json")*/
                var stateData={
                  Status:newStatus,
                  Txnid:newTxnId
                
                };
                const mynewState = encoder.encode(JSON.stringify(stateData));
                console.log("mynewState", mynewState);
                const newStateMap = {
                  [address]: mynewState
                }
                return context.setState(newStateMap);

            })
          
    }

}
module.exports = HygieiaHandler;