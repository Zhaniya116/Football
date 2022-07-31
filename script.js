formSubmit = ()=>{
    team1 = document.getElementsByName('team1')[0].value
    team2 = document.getElementsByName('team2')[0].value
    score1 = document.getElementsByName('team1_score')[0].value
    score2 = document.getElementsByName('team2_score')[0].value
    var list =  document.getElementsByClassName('score_item');
            for(var i = 0; i < list.length; i++){
                list[i].style.display = 'none';
            }
            var list_res =  document.getElementsByClassName('result');
            for(var i = 0; i < list_res.length; i++){
                list_res[i].style.display = 'none';
            }
            if(score1 <=7 && score2 <=7 && score1 != '' && score2 != ''){
                if(score1 == score2){
                    document.getElementById('draw').style.display = 'block';
                }
                else if(score2<score1){
                    document.getElementById('win1').style.display = 'block'
                    document.getElementById('fail2').style.display = 'block'
                }
                else {
                    document.getElementById('win2').style.display = 'block'
                    document.getElementById('fail1').style.display = 'block'
                }
            }
        switch (score1){
            case '': document.getElementById('9').style.display = 'block';
                break;
            case '0': document.getElementById('0').style.display = 'block';
                break;
            case '1': document.getElementById('1').style.display = 'block';
                break;
            case '2': document.getElementById('2').style.display = 'block';
                break;
            case '3': document.getElementById('3').style.display = 'block';
                break;
            case '4': document.getElementById('4').style.display = 'block';
                break;
            case '5': document.getElementById('5').style.display = 'block';
                break;
            case '6': document.getElementById('6').style.display = 'block';
                break;
            case '7': document.getElementById('7').style.display = 'block';
                break;
            default: document.getElementById('8').style.display = 'block';
                break;
        }
        switch (score2){
            case '': document.getElementById('19').style.display = 'block';
                break;
            case '0': document.getElementById('10').style.display = 'block';
                break;
            case '1': document.getElementById('11').style.display = 'block';
                break;
            case '2': document.getElementById('12').style.display = 'block';
                break;
            case '3': document.getElementById('13').style.display = 'block';
                break;
            case '4': document.getElementById('14').style.display = 'block';
                break;
            case '5': document.getElementById('15').style.display = 'block';
                break;
            case '6': document.getElementById('16').style.display = 'block';
                break;
            case '7': document.getElementById('17').style.display = 'block';
                break;
            default: document.getElementById('18').style.display = 'block';
                break;
        }
        var arrayOfTeam1 = team1.split("\n");
        var arrayOfTeam2 = team2.split("\n");
        var temp = 1;
        if(arrayOfTeam1.length > 11){
            alert("The number of players in a single team cannot be more than 11. (Team1)")
            document.getElementsByName('team1')[0].value = "";
        }else{
            console.log("List of first team:")
            arrayOfTeam1.forEach(teamOutput);
        }
        function teamOutput(item) {
            console.log("  "+temp+". "+item)
            temp = temp + 1;
        }
        if(arrayOfTeam2.length > 11){
            alert("The number of players in a single team cannot be more than 11. (Team2)")
            document.getElementsByName('team2')[0].value = "";
        }else{
            temp = 1;
            console.log("List of second team:")
            arrayOfTeam2.forEach(teamOutput);
        }
    }