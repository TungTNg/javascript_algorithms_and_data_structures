// Every email consists of a local name and a domain name, separated by the @ sign.

// For example, in alice@leetcode.com, alice is the local name, and leetcode.com is the domain name.

// Besides lowercase letters, these emails may contain '.'s or '+'s.

// If you add periods ('.') between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name.  For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.  (Note that this rule does not apply for domain names.)

// If you add a plus ('+') in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered, for example m.y+name@email.com will be forwarded to my@email.com.  (Again, this rule does not apply for domain names.)

// It is possible to use both of these rules at the same time.

// Given a list of emails, we send one email to each address in the list.  How many different addresses actually receive mails? 

// Example 1:

// Input: ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
// Output: 2
// Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails
 

// Note:

// 1 <= emails[i].length <= 100
// 1 <= emails.length <= 100
// Each emails[i] contains exactly one '@' character.
// All local and domain names are non-empty.
// Local names do not start with a '+' character.


var numUniqueEmails = function(emails) {
    var map = {};
    
    for(var email of emails) {
        var bothNames = email.split("@");
        var localName = bothNames[0].split("+")[0].split(".").join("");
        var domainName = bothNames[1];
        var sanitizedEmail = localName + "@" + domainName;
        
        map[sanitizedEmail] = true;
    }
    
    return Object.keys(map).length;    
};

// var numUniqueEmails = function(emails) {
//     var map = {};
    
//     for(var email of emails) {
//         var sanitizedEmail = "";
        
//         for(var i = 0; i < email.length; i++) {
//             if(email[i] == ".") {
//                 continue;
//             } else if (email[i] == "+") {
//                 while(email[i] !== "@") {
//                     i++;
//                 }
                
//                 sanitizedEmail += email.substring(i);
//                 break;
//             } else if (email[i] == "@") {
//                 sanitizedEmail += email.substring(i);
//                 break;
//             } else {
//                 sanitizedEmail += email[i];
//             }
//         }
        
//         map[sanitizedEmail] = true;
//     }
    
//     return Object.keys(map).length;
// };

console.log(numUniqueEmails(["fg.r.u.uzj+o.pw@kziczvh.com","r.cyo.g+d.h+b.ja@tgsg.z.com","fg.r.u.uzj+o.f.d@kziczvh.com","r.cyo.g+ng.r.iq@tgsg.z.com","fg.r.u.uzj+lp.k@kziczvh.com","r.cyo.g+n.h.e+n.g@tgsg.z.com","fg.r.u.uzj+k+p.j@kziczvh.com","fg.r.u.uzj+w.y+b@kziczvh.com","r.cyo.g+x+d.c+f.t@tgsg.z.com","r.cyo.g+x+t.y.l.i@tgsg.z.com","r.cyo.g+brxxi@tgsg.z.com","r.cyo.g+z+dr.k.u@tgsg.z.com","r.cyo.g+d+l.c.n+g@tgsg.z.com","fg.r.u.uzj+vq.o@kziczvh.com","fg.r.u.uzj+uzq@kziczvh.com","fg.r.u.uzj+mvz@kziczvh.com","fg.r.u.uzj+taj@kziczvh.com","fg.r.u.uzj+fek@kziczvh.com"]));