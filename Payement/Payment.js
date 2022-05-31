
//לא עשיתי 
//HTML
//כי רציתי יותר להראות את ענין ההורשה והמחלקות
//ולכן התמקדתי ב
//JS
//
//מחלקת תשלום שממנה יורשות מחלקות אשראי וסליקה
class Payment {
    _id;
    _descriptipn;
    _dateofPayment;
    _sum;
    _status;
    _paymentMethod;
    constructor(id, dateofPayment, sum, descriptipn, status, paymentMethod) {
        this._id = id;
        this._dateofPayment = dateofPayment;
        this._descriptipn = descriptipn;
        this._sum = sum;
        this._status = status;
        this._paymentMethod = paymentMethod
    }
    //פונקצית תשלום מקבל את התשלום הכללי ומורידה ממנו את התשלום הנוכחי
    Payment = (sum) => {
        return sum - this._sum;
    }
    //פונקציות החזר מקבל את התשלום הכללי ומעלה אליו את התשלום הנוכחי
    Refund = (sum) => {
        return sum + this._sum;
    }
    Update = (payment) => {
        //מציג את הדף המתאים לתשלום
    }
}
//מחלקת עסקה מכילה מערך של תשלומים שהם יכולים להיות מהמחלקות היורשות 
//מזומן-PAYMENT
//אשראי-CREDIT
//חברת סליקה-ClearingCompany
class Deal {
    #payments;
    #sum;
    constructor(sum) {
        this.#payments = []
        this.#sum = sum;
    }
    //הוספת תשלום למרך התשלומים 
    //מקבל את סוג התשלום 
    //VAR P
    // אמור להתעדכן מהנתונים שהוכנסו ב
    //HTML
    AddPayment = (typePayment) => {
        var p;
        switch (typePayment) {
            case "אשראי":
                p = new Credit();
                break;
            case "מזומן":
                p = new Payment();
                break;
            case "חברת סליקה":
                p = new ClearingCompany();
        }
        this.#payments.push(p)
        this.#sum = p.Payment();
    }
    // מחיקת תשלום מסוים
    RemovePayment = (id) => {
        var index = this.#payments.indexOf(p => p.id == id);
        this.#sum = this.#payments[index].Refund(this.#sum)
    }
    //עדכון תשלום מסוים
    Update = (id) => {
        var index = this.#payments.indexOf(p => p.id == id)
        this.#payments[index].Update(this);
}
}
// מחלקת אשראי
class Credit extends Payment {
    #ffournum;
    #cvv;
    #dateofPayment;
    constructor(fournum, cvv, dateValidity) {
        this.#ffournum = fournum;
        this.#cvv = cvv;
        this.#dateofPayment = dateValidity;
    }
    Payment = (sum) => {
        return sum - this._sum;
    }
    Refund = (sum) => {
        return sum + this._sum;
    }
    Update = (payment) => {
        //מציג את הדף המתאים לתשלום
    }
}
// מחלקת פרטי משתמש
class UserDatail {
    #id;
    #name;
    #phone;
    #adress;
    constructor(id, name, phone, adress) {
        this.#id = id;
        this.#name = name;
        this.#phone = phone;
        this.#adress = adress;
    }
    Payment = (sum) => {
        return sum - this._sum;
    }
    Refund = (sum) => {
        return sum + this._sum;
    }
    Update = (payment) => {
        //מציג את הדף המתאים לתשלום
    }
}
//מחלקת חברת סליקה  
class ClearingCompany extends Payment {
    #id;
    #nameCompany;
    constructor(id, nameCompany) {
        this.#id = id;
        this.#nameCompany = nameCompany;
    }
    Payment = (sum) => {
        return sum - this._sum;
    }
    Refund = (sum) => {
        return sum + this._sum;
    }
    Update = (payment) => {
        //מציג את הדף המתאים לתשלום
    }
}