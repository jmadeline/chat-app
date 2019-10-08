import React from "react";
import Contact from "./Contact/Contact";

const contacts = [
    {
        name:
            "Alfredo Richards",
        avatar:
            "https://randomuser.me/api/portraits/men/42.jpg",
        status:
            true
    },
    {
        name: "Nelly Wilson",
        avatar:
            "https://randomuser.me/api/portraits/women/46.jpg",
        status:
            false
    },
    {
        name: "Sylvia Nelson",
        avatar:
            "https://randomuser.me/api/portraits/women/32.jpg",
        status:
            true
    },
    {
        name:
            "Leah Rice",
        avatar:
            "https://randomuser.me/api/portraits/women/21.jpg",
        status:
            true
    },
    {
        name:
            "Hailey Smith",
        avatar:
            "https://randomuser.me/api/portraits/women/54.jpg",
        status:
            false
    }
];

const ContactList = () => (
    <div>
        {contacts.map((item, index) => (
            <Contact key={index} avatar={item.avatar} name={item.name} status={item.status} />
        ))}
    </div>

);


export default ContactList;
