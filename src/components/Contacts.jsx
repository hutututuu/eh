import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function Contacts() {
  return (
    <div>
      <h1 style={{ fontFamily: "Verdana" }}>Kontakty</h1>
      <div class="shadow-sm p-3 mb-5 bg-body rounded">
        <Card
          name={contacts[0].name}
          img={contacts[0].img}
          email={contacts[0].email}
          tel={contacts[0].tel}
        />
      </div>
      <div class="shadow-sm p-3 mb-5 bg-body rounded">
        <Card
          name={contacts[1].name}
          img={contacts[1].img}
          email={contacts[1].email}
          tel={contacts[1].tel}
        />
      </div>
      <div class="shadow-sm p-3 mb-5 bg-body rounded">
        <Card
          name={contacts[2].name}
          img={contacts[2].img}
          email={contacts[2].email}
          tel={contacts[2].tel}
        />
      </div>
    </div>
  );
}

export default Contacts;
