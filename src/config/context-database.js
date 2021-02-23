import mysql from 'mysql';
const info = {
    host :'192.168.10.202',
    port :3306,
    user:'newcow', 
    password:'newcow',
    database:'cow'
}
const DBconn = mysql.createConnection(info)

export default DBconn;