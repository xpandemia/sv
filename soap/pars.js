const xml2js = require('xml2js');
const fs = require("fs");
// XML string to be parsed to JSON
const xml = `
<?xml version="1.0"?>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/"><SOAP-ENV:Body SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:NS1="urn:OrionProIntf-IOrionPro" xmlns:NS2="urn:OrionProIntf"><NS1:GetEventsResponse><return href="#1"/></NS1:GetEventsResponse><SOAP-ENV:TOperationResultEvents id="1" xsi:type="NS2:TOperationResultEvents"><Success xsi:type="xsd:boolean">true</Success><ServiceError xsi:nil="true"/><OperationResult xsi:type="SOAP-ENC:Array" SOAP-ENC:arrayType="NS2:TEvent[2]"><item href="#2"/><item href="#3"/></OperationResult></SOAP-ENV:TOperationResultEvents><SOAP-ENV:TEvent id="2" xsi:type="NS2:TEvent"><EventId xsi:type="xsd:string">{C67689AD-2122-4093-8BE1-A9770CBADDB6}</EventId><EventTypeId xsi:type="xsd:int">28</EventTypeId><EventDate xsi:type="xsd:dateTime">2020-12-16T15:32:45.000+03:00</EventDate><Description xsi:type="xsd:string">11: Выход   Турникет12_5,   Считыватель 2, Прибор </Description><ComputerId xsi:type="xsd:int">1</ComputerId><ComPortNumber xsi:type="xsd:int">10</ComPortNumber><PKUAddress xsi:type="xsd:int">0</PKUAddress><DevAddress xsi:type="xsd:int">5</DevAddress><ZoneAddress xsi:type="xsd:int">2</ZoneAddress><AccessPointId xsi:type="xsd:int">11</AccessPointId><AccessPointName xsi:type="xsd:string">Турникет12_5</AccessPointName><AccessZoneId xsi:type="xsd:int">-1</AccessZoneId><PassMode xsi:type="xsd:int">2</PassMode><CardNo xsi:type="xsd:string">DC0000A462CA2101</CardNo><PersonId xsi:type="xsd:int">384</PersonId><LastName xsi:type="xsd:string">Белоус</LastName><FirstName xsi:type="xsd:string">Ирина</FirstName><MiddleName xsi:type="xsd:string">Александровна</MiddleName><BirthDate xsi:type="xsd:dateTime">1964-03-14T00:00:00.000+03:00</BirthDate><TabNum xsi:type="xsd:string"></TabNum><ItemType xsi:type="xsd:string">READER</ItemType><SectionId xsi:type="xsd:int">-1</SectionId><ReaderId xsi:type="xsd:int">218</ReaderId></SOAP-ENV:TEvent><SOAP-ENV:TEvent id="3" xsi:type="NS2:TEvent"><EventId xsi:type="xsd:string">{3B7B8EBD-5397-4376-9439-A59A14D3EF7F}</EventId><EventTypeId xsi:type="xsd:int">28</EventTypeId><EventDate xsi:type="xsd:dateTime">2020-12-16T15:32:59.000+03:00</EventDate><Description xsi:type="xsd:string">10: Выход   Турникет12_4,   Считыватель 2, Прибор </Description><ComputerId xsi:type="xsd:int">1</ComputerId><ComPortNumber xsi:type="xsd:int">10</ComPortNumber><PKUAddress xsi:type="xsd:int">0</PKUAddress><DevAddress xsi:type="xsd:int">4</DevAddress><ZoneAddress xsi:type="xsd:int">2</ZoneAddress><AccessPointId xsi:type="xsd:int">10</AccessPointId><AccessPointName xsi:type="xsd:string">Турникет12_4</AccessPointName><AccessZoneId xsi:type="xsd:int">-1</AccessZoneId><PassMode xsi:type="xsd:int">2</PassMode><CardNo xsi:type="xsd:string">DC0000A462CA2101</CardNo><PersonId xsi:type="xsd:int">384</PersonId><LastName xsi:type="xsd:string">Белоус</LastName><FirstName xsi:type="xsd:string">Ирина</FirstName><MiddleName xsi:type="xsd:string">Александровна</MiddleName><BirthDate xsi:type="xsd:dateTime">1964-03-14T00:00:00.000+03:00</BirthDate><TabNum xsi:type="xsd:string"></TabNum><ItemType xsi:type="xsd:string">READER</ItemType><SectionId xsi:type="xsd:int">-1</SectionId><ReaderId xsi:type="xsd:int">210</ReaderId></SOAP-ENV:TEvent></SOAP-ENV:Body></SOAP-ENV:Envelope>



`;

// convert XML to JSON
xml2js.parseString(xml, { mergeAttrs: true }, (err, result) => {
    if(err) {
        throw err;
    }

    // `result` is a JavaScript object
    // convert it to a JSON string
    const json = JSON.stringify(result, null, 4);

    // log JSON string
    // console.log(json);
    //file
    fs.writeFile("data.json", json , function(error){

        if(error) throw error; // если возникла ошибка
        console.log("Асинхронная запись файла завершена. Содержимое файла:");
        let data = fs.readFileSync("data.json", "utf8");
        console.log(data);  // выводим считанные данные
    });
    //--file
});
