//bai 1
let bai1 = document.getElementById('bai1')
bai1.addEventListener('click',function(){
    let regex = /\d{2}-\d{2}-\d{4}/
    let input = document.getElementById('date1').value
    if(input.match(regex)){
        let arr = input.split('-')
        let day,month,year
        let check = true
        if(+arr[1] > 0 && +arr[1] <= 12 && +arr[2] > 0){
            month = +arr[1]
            year = +arr[2]
            if(+arr[0] == 31){
                day = 1
                month = 1
                if(+arr[1] == 12){
                    year = +arr[2] +1
                }
            }
            else if(+arr[0] < 31){
                day = +arr[0] + 1
            }
            else {
                check = false
            }
            
        }
        if(!(+arr[1] > 0 && +arr[1] <= 12 && +arr[2] > 0)){
            document.getElementById('result1').innerText = `Ngày tháng năm không tồn tại`
            return 0;
        }
        if(check == false){
            document.getElementById('result1').innerText = `Ngày tháng năm không tồn tại`
        }
        if(check == true){
            document.getElementById('result1').innerText = `Ngày tiếp theo là: ${day} - ${month} - ${year}`
        }
    }
    else{
        document.getElementById('result1').innerText = `Bạn nhập sai format (dd-mm-yyy) vui lòng nhập lại`
    }
})




//bai 2
let bai2  = document.getElementById('bai2')

bai2.addEventListener('click',function(){
    let regex = /\d{2}-\d{4}/
    let maxDay = 0
    let input = document.getElementById('date2').value
    if(input.match(regex)){
        let arr = input.split('-')
        let month= +arr[0]
        let year = +arr[1]
        if(month > 0 && month <= 12 && year > 0){
            switch(month){
                case 1: case 3: case 5: case 7: case 8: case 10: case 12:
                    maxDay = 31;
                    break;
                case 4: case 6: case 9: case 11:
                    maxDay = 30
                    break;
                case 2:
                    maxDay = (year % 4 == 0 && year % 100 != 0 || year % 400 ==0)?29:28
                    break;
            } 
            document.getElementById('result2').innerText = `Tháng này có ${maxDay} ngày` 
        }
        else{
            document.getElementById('result2').innerText = "Tháng hoặc năm không tồn tại"
            return 0;
        }

    }
    else{
        document.getElementById('result2').innerText = "Bạn nhập sai format (mm-yyy) vui lòng nhập lại"
    }
    
})


//bai 3

document.getElementById('bai3').addEventListener('click',function(){
    let input = +document.getElementById("st").value
    let arr = []
    if(input > 99 && input <= 999){
        let last
        while(input != 0){
            last = input  % 10
            arr.unshift(last)
            input = Math.floor(input / 10)
        }

        let newArr = arr.map(function(e){
            if(e == 1){
                return 'một'
            }
            else if(e==2){
                return 'hai'
            }
            else if(e==3){
                return 'ba'
            }
            else if(e==4){
                return 'bốn'
            }
            else if(e==5){
                return 'năm'
            }
            else if(e==6){
                return 'sáu'
            }
            else if(e==7){
                return 'bảy'
            }
            else if(e==8){
                return 'tám'
            } 
            else(e==9);{
                return 'chín'
            }
        })
        document.getElementById("result3").innerText = `Cách đọc của só đó là: ${newArr[0]} trăm ${newArr[1]} mươi ${newArr[2]}`
    }
    else{
        document.getElementById("result3").innerText =" Đây không phải số có ba chữ số"
    }
})

// bai 4

let bai4 = document.getElementById('bai4')
bai4.addEventListener('click',function(){
    let kc1,kc2,kc3;
    let regex = /\d-\d/;
    let toaDo1 = document.getElementById('toado1').value
    if(!toaDo1.match(regex)){
        document.getElementById('result4').innerText =`Bạn ghi sai format tại tọa độ 1`
        return 0;
    }
    else{
        let new1 = toaDo1.split("-")
        let a = +new1[0]
        let b = +new1[1]
        kc1 = Math.sqrt(Math.pow((19-a),2)+Math.pow((90-b),2))
    }
    let toaDo2 = document.getElementById('toado2').value
    if(!toaDo2.match(regex)){
        document.getElementById('result4').innerText =`Bạn ghi sai format tại tọa độ 2`
        return 0;
    }
    else{
        let new2 = toaDo2.split("-")
        let c = +new2[0]
        let d = +new2[1]
        kc2 = Math.sqrt(Math.pow((19-c),2)+Math.pow((90-d),2))
    }

    let toaDo3 = document.getElementById('toado3').value

    if(!toaDo3.match(regex)){
        document.getElementById('result4').innerText =`Bạn ghi sai format tại tọa độ 3`
        return 0;
    }
    else{
        let new3 = toaDo3.split("-")
        let e = +new3[0]
        let f = +new3[1]
        kc3 = Math.sqrt(Math.pow((19-e),2)+Math.pow((90-f),2))
    }
    let max= kc1;
    if(kc2 > kc1 ){
        max = kc2
    }
    if(max < kc3){
        max = kc3


    if(max == kc1){
        document.getElementById('result4').innerText = `Khoảng cách của học sinh thứ nhất là xa nhất`

    }
    else if(max == kc2){
        document.getElementById('result4').innerText = `Khoảng cách của học sinh thứ hai là xa nhất`
    }
    else if(max == kc3){
        document.getElementById('result4').innerText = `Khoảng cách của học sinh thứ ba là xa nhất`
    }
    else if(max == kc1 && kc1 == kc2 && kc1 == kc3){
        document.getElementById('result4').innerText = `Khoảng cách của 3 học sinh bằng nhau`
    }
    else if(max == kc1 && kc1 == kc2 ){
        document.getElementById('result4').innerText = `Khoảng cách của  học sinh thứ nhất và học sinh thứ hai là bằng nhau và xa nhất`
    }
    else if(max == kc2 && kc2 == kc3){
        document.getElementById('result4').innerText = `Khoảng cách của  học sinh thứ ba và học sinh thứ hai là bằng nhau và xa nhất`
    }
    else(max == kc1 && kc1 == kc3);{
        document.getElementById('result4').innerText = `Khoảng cách của  học sinh thứ ba và học sinh thứ nhất là bằng nhau và xa nhất`
    }
    }
})


