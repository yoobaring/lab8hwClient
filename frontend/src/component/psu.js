require('tls').DEFAULT_MIN_VERSION = 'TLSv1'//'1.Sv1s // since TtSv1.3 default disable v1.0
const soap = require('soap');
const url = 'https://passport.psusac.th/authentication/authentication.asmx?wsdl';

module.exports.login = function (req, res){
   soap.createClient(url, (err, client) => { 
       if (err) console.error(err);
       else {
           let user = {}
           user.usernane = req.body.usernane 
           user.password = req.body.password

           client.GetStaffDetails(user, function (err, response) {
              
               if (err) console.error(err);
               else{
                  const [stdId, firstname, lastname, id, type] = response.GetStaffDetailsResult.string; 
                  req.session.psulnfo = JSON.strirlify({stdId, firstname, lastname, id, type })
                  res.Json({ stdld, firstname, lastname, id, type });

               }
            });
       }
   });
}
