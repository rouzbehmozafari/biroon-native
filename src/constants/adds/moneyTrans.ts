import { ReactNode } from "react"
import { ImageProps, ImageSourcePropType, ImageURISource } from "react-native"

interface ImoneyTrans {
    _id : string,
    userId: string,
    title: string,
    imageUrl : string ,
    dateAdded:string,
    timeAdded:string,
    body: string,
    price: number | 'N/A' ,
    country: string,
    city: string,
    phoneNum: string,
    category: string,
    bidOrAskOr: "bid" | "ask" | "lookingFor"
    promotion: "free" | "type_1.1" | "type_2.1"
}
export const AllMoneyTrans :ImoneyTrans[] =   
[
    {"_id": "624addc07ffc03b1dc0986fb" ,
    "userId": "624addf6a756b95643300084" ,
    "title" : "We transfer your money!",
    "imageUrl" : "https://www.thelancet.com/cms/attachment/8956543e-66d6-4507-897a-a941ae994468/null",
    "dateAdded" : "04.04.2022",
    "timeAdded" : "02:03 PM",
    "body" : "this is my body",
    "price" : "N/A",
    "country": "Germany",
    "city" : "cologne",
    "phoneNum": "057684592784",
    "category": "sendMoney",
    "bidOrAskOr" : "bid",
    "promotion" : "free"
    }
    ,
    {"_id": "624addc07ffc03b1dc0986fb" ,
    "userId": "624addf6a756b95643300084" ,
    "title" : "We transfer your money!",
    "imageUrl" : "data:image/png;base64,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",
    "dateAdded" : "04.04.2022",
    "timeAdded" : "02:03 PM",
    "body" : "this is my body",
    "price" : "N/A",
    "country": "Germany",
    "city" : "cologne",
    "phoneNum": "057684592784",
    "category": "sendMoney",
    "bidOrAskOr" : "bid",
    "promotion" : "free"
    },
    {"_id": "624addc07ffc03b1dc0986fb" ,
    "userId": "624addf6a756b95643300084" ,
    "title" : "We transfer your money!",
    "imageUrl" : "https://www.thelancet.com/cms/attachment/8956543e-66d6-4507-897a-a941ae994468/null",
    "dateAdded" : "04.04.2022",
    "timeAdded" : "02:03 PM",
    "body" : "this is my body",
    "price" : "N/A",
    "country": "Germany",
    "city" : "cologne",
    "phoneNum": "057684592784",
    "category": "sendMoney",
    "bidOrAskOr" : "bid",
    "promotion" : "free"
    }
    ]
