// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MentorMenteeRegistration {
    
    struct Mentor {
        string name;
        string description;
        string title;
        address mentorAddress;
    }
    
    struct Mentee {
        string name;
        address menteeAddress;
    }
    
    Mentor[] public mentorList;
    Mentee[] public menteeList;
    
    mapping(address => bool) public isMentor;
    mapping(address => bool) public isMentee;
    
    event MentorRegistered(address mentorAddress, string name);
    event MentorRemoved(address mentorAddress, string name);
    event MenteeRegistered(address menteeAddress, string name);
    event MenteeRemoved(address menteeAddress, string name);
    
    function registerAsMentor(string memory _name, string memory _description, string memory _title) external {
        require(!isMentor[msg.sender], "You are already registered as a mentor.");
        mentorList.push(Mentor(_name, _description, _title, msg.sender));
        isMentor[msg.sender] = true;
        emit MentorRegistered(msg.sender, _name);
    }
    
    function removeMentor() external {
        require(isMentor[msg.sender], "You are not registered as a mentor.");
        delete isMentor[msg.sender];
        string memory mentorName;
        
        for (uint256 i = 0; i < mentorList.length; i++) {
            if (mentorList[i].mentorAddress == msg.sender) {
                mentorName = mentorList[i].name;
                mentorList[i] = mentorList[mentorList.length - 1];
                mentorList.pop();
                break;
            }
        }
        
        emit MentorRemoved(msg.sender, mentorName);
    }
    
    function registerAsMentee(string memory _name) external {
        require(!isMentee[msg.sender], "You are already registered as a mentee.");
        menteeList.push(Mentee(_name, msg.sender));
        isMentee[msg.sender] = true;
        emit MenteeRegistered(msg.sender, _name);
    }
    
    function removeMentee() external {
        require(isMentee[msg.sender], "You are not registered as a mentee.");
        delete isMentee[msg.sender];
        string memory menteeName;
        
        for (uint256 i = 0; i < menteeList.length; i++) {
            if (menteeList[i].menteeAddress == msg.sender) {
                menteeName = menteeList[i].name;
                menteeList[i] = menteeList[menteeList.length - 1];
                menteeList.pop();
                break;
            }
        }
        
        emit MenteeRemoved(msg.sender, menteeName);
    }
    
    function getMentorCount() external view returns (uint256) {
        return mentorList.length;
    }
    
    function getMenteeCount() external view returns (uint256) {
        return menteeList.length;
    }
    
    function getMentorByIndex(uint256 _index) external view returns (string memory, string memory, string memory, address) {
        require(_index < mentorList.length, "Invalid mentor index.");
        Mentor memory mentor = mentorList[_index];
        return (mentor.name, mentor.description, mentor.title, mentor.mentorAddress);
    }
    
    function getMenteeByIndex(uint256 _index) external view returns (string memory, address) {
        require(_index < menteeList.length, "Invalid mentee index.");
        Mentee memory mentee = menteeList[_index];
        return (mentee.name, mentee.menteeAddress);
    }

     function getMentorList() external view returns (Mentor[] memory) {
        return mentorList;
    }

     function getMenteeList() external view returns (Mentee[] memory) {
        return menteeList;
    }

}
