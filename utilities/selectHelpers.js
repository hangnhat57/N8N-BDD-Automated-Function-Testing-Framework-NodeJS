export class SelectHelper{

   static selectByIndex(select,index){
        select.click();
        select.element(by.css("option:nth-child("+index+")")).click();
    }
   static selectByValue(select,value){
        select.click();
        select.element(by.css("option[value='"+value+"']")).click()
    }
    static selectByText(select,value){
        select.click();
        select.element(by.xpath("//option[contains(.,'"+value+"')]")).click()
    }


}

