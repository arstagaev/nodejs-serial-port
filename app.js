const { parse } = require('path')
const serialPort = require('serialport')

const port = new serialPort(
    'COM3',
    {baudRate: 115200}
)
const bytes = [116, 116, 116, 112, 115, 58, 47, 47, 119, 119, 119, 46, 106, 118];
  console.log(new Buffer.from(bytes).toString());

const parser = new serialPort.parsers.Readline()

port.pipe(parser)
port.open
//port.write('1')
//console.log('Start process 777 ')


//Read data that is available but keep the stream in "paused mode"
port.on('readable', function () {
    console.log('Data:',hexToString(bufferToHex(port.read())))
    console.log('DataX:',bufferToHex(port.read()))
    console.log('DataY:',port.read())

})

setTimeout(function() {
    port.write('1')
}, 3000);

// var buffer = new Buffer.alloc(14);
// buffer[0] = 0x31;
// buffer[1] = 0x31;
// buffer[2] = 0x36;
// buffer[3] = 0xFA;
// buffer[4] = 0x00;
// buffer[5] = 0x56;
// buffer[6] = 0x00;
// buffer[7] = 0x03;
// buffer[8] = 0x9E;
// buffer[9] = 0x00;
// buffer[10] = 0x56;
// buffer[11] = 0x00;
// buffer[12] = 0x03;
// buffer[13] = 0x9E;
// buffer[14] = 0x00;
var buffer = new Buffer.alloc(14);
buffer[0] = 116;
buffer[1] = 116;
buffer[2] = 116;
buffer[3] = 116;
buffer[4] = 116;
buffer[5] = 116;
buffer[6] = 116;
buffer[7] = 116;
buffer[8] = 116;
buffer[9] = 116;
buffer[10] = 116;
buffer[11] = 116;
buffer[12] = 116;
buffer[13] = 116;
//buffer[14] = 0;

// let fruits = ['1', '1','0','0','0','0','0','0','0','0','0','0','0','0']
//let fruits = [1 , 0 , 0  , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0]

setTimeout(function() {
    port.write(buffer, function (err, result) {
        if (err) {
            console.log('Error while sending message : ' + err);
        }
        if (result) {
            console.log('Response received after sending message : ' + result);
        }    
    });
}, 3000);


var buffer2 = new Buffer.alloc(14);
buffer2[0] = 120;
buffer2[1] = 0;
buffer2[2] = 0;
buffer2[3] = 0;
buffer2[4] = 116;
buffer2[5] = 116;
buffer2[6] = 116;
buffer2[7] = 116;
buffer2[8] = 116;
buffer2[9] = 116;
buffer2[10] = 116;
buffer2[11] = 116;
buffer2[12] = 116;
buffer2[13] = 116;
console.log('Start of buffer two !! ');
setTimeout(function() {
    port.write(buffer2, function (err, result) {
        
        if (err) {
            console.log('Error while sending message : ' + err);
        }
        if (result) {
            console.log('Response received after sending message : ' + result);
        }    
    });
}, 3000);



const command = ["0x116", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00","0x00", "0x00", "0x00", "0x00","0x00", "0x00", "0x00"]
const buff = Buffer.from(command);















function bufferToHex (buffer) {
    return [...new Uint8Array (buffer)]
        .map (b => b.toString (16).padStart (2, "0"))
        .join ("");
}

function hexToString (hex) {
    var string = '';
    for (var i = 0; i < hex.length; i += 2) {
    string += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    return string;
}

function hex(str) {
    var arr = [];
    for (var i = 0, l = str.length; i < l; i ++) {
            var ascii = str.charCodeAt(i);
            arr.push(ascii);
    }
    arr.push(255);
    arr.push(255);
    arr.push(255);
    return new Buffer(arr);
}





// parser.on( 'data',(line)=>{
//     console.log('Read line: ' + a2hex(toHexString(line)))
    
// })

function toHexString(byteArray) {
    return Array.from(byteArray, function(byte) {
      return ('0' + (byte & 0xFF).toString(16)).slice(-2);
    }).join('')
  }

 