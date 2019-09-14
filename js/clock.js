<script>


            var refreshTime = 300000; // every 1 minute in milliseconds
            window.setInterval( function() {
                $.ajax({
                    cache: false,
                    type: "GET",
                    url: "../common/refreshSession.php",
                    success: function(data) {
                    }
                });
            }, refreshTime );
        
            var current_question = 0;
                function display()
          
            { 
          
              current = new Date();
              
              difference = 1568456424378 - current.getTime();
              
              timedif = Math.round(difference/1000);
              
              if (timedif > 0 )
              {
              difference = timedif;
              
              seconds =  difference % 60;
              difference  = (difference - seconds) / 60;
              minutes =  difference % 60;
              difference  = (difference - minutes) / 60;
              hours   =  difference % 24;
               
               
              if (minutes < 10){minutes = "0" + minutes;}    
              if (seconds < 10){seconds = "0" + seconds;}  
              
              
              timestr = "";
              
              if (hours > 0)
              {
                timestr =  hours +":";
              }
                
              $('#timer').html(timestr + minutes +":" +seconds) ; 
        
              setTimeout("display()",1000) ;
              }
              else
              {
              alert("Your allocated time has expired. Please click OK to proceed to the results page.");
              location.href = 'post_test.php?tl=0';
              }
            }
        
          
        
           function confirmfinish() 
            { 
            var answer = confirm("Are you sure you have finished this exam?")
            if (answer) { window.location='post_test.php'; return true ; } else {  return false ; }
            }
        
          function confirmsave(qn2) 
            {
            var save = confirm("Are you sure you want to leave the exam and finish it later?")
            if (save){
            window.location='save_test.php?q='+qn2; return true ; } else {   return false ; }
            }
          
        
          display();
              
          
        
        
        
           function confirmexit() 
            { 
            var answer = confirm("Are you sure you want to return to the main menu?")
            if (answer) { window.location='../menu/menu.php'; return true ; } else {  return false ; }
            }
        
        
        
        
        
        
        
        
        
        
        
            lastsave = '';
            function savedata(force,notesid) 
            { 
        
              if ($('#user_notes').summernote('code') != lastsave || force == true )
              {
              
                $('#notes-saving-text').show();
                
                $.post("set_notes_ajax.php", {  n: $('#user_notes').summernote('code'), id: notesid}, function(data)
                  {
                  $('#notes-saving-text').fadeOut('slow');
                  
                  lastsave = $('#user_notes').summernote('code');
                  });
              }
            }
        
        
           $(document).ready(function() {
        
        
               var mode = "timed test";var extended_concept_functionality = true;
        
            var question_count = 10;
        
            var question_count_label = 10;
        
            var highest_question = 0;
        
          
            var question_type=[];
            var attempted = [];
            var answer_given = [];
            var score = [];
            var score_array = [];
            var f = [];
            var cr = [];
            var label = [];
        
            var question_id = [];
            var successfully_saved_answer = [];
        
        
            for (var i =0; i < question_count;i++)
            {
              attempted[i]=0;
              answer_given[i]='';
              score[i]=0;
              score_array[i]=[];
              f[i]=0;
              cr[i]=0;
              question_id[i]='';
              successfully_saved_answer[i]=0;
            }
        
            label = ['1','2','3','4','5','6','7','8','9','10'];highest_question = 9;question_type = [0,0,0,0,0,0,0,0,0,0];answer_given = ["0","0","0","0","0","0","0","0","0","0"];attempted = [0,0,0,0,0,0,0,0,0,0];score = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
        
         var question_data={},question_in_cache=-1,cache_data={},running_score=0,running_attempted=0,question_items=new Array(1,3,1,1,1,1,1,1,1),question_marks=new Array(1,3,12,12,1,2,4,10,5),alphabet=new Array("-","A","B","C","D","E","F","G","H","I","J");$.ajaxSetup({cache:!1});var _0x57cd=["length","charCodeAt","fromCharCode","charAt"];!function(t,e){!function(e){for(;--e;)t.push(t.shift())}(++e)}(_0x57cd,244);var _0x4c47=function(e,t){return _0x57cd[e-=0]};function r(e,t){t=26-(t*t+t*t*t+t+15)%26;for(var n="",i=0;i<e[_0x4c47("0x0")];i++){var a=e[_0x4c47("0x1")](i);n+=65<=a&&a<=90?String.fromCharCode((a-65+t)%26+65):97<=a&&a<=122?String[_0x4c47("0x2")]((a-97+t)%26+97):e[_0x4c47("0x3")](i)}return n}function write_question_to_screen(e){question_id[current_question]=e.question_id,question_type[current_question]=e.question_type;var t="";if(0==e.question_type)if(t+=e.question,t+="<br><br>",0==attempted[current_question]){for(t+='<div class="list-group">',i=1;i<=e.num_of_options;i++)t+='<a href="#" style="background-image: url(https://d32xxyeh8kfs8k.cloudfront.net/css/images/greybar.png); background-repeat: repeat-y; background-size: 0;" id="BOFoption'+i+'" data-optionnum="'+i+'" class="list-group-item list-group-item-action sba-option justify-content-between d-flex align-items-center" >',t+='<div class="custom-control custom-radio" style="font-weight: normal;">',t+='<input type="radio" class="custom-control-input" name="optionsRadio" id="optionsRadio'+i+'" style="margin-right:20px" value="'+i+'" ',"timed test"==mode&&answer_given[current_question]==i&&(t+="checked"),t+=">",t+='<label class="custom-control-label" for="optionsRadio'+i+'">'+e.options[i]+"</label></div>",t+='<span id="popularity_badge'+i+'" class="score-badge badge badge-pill badge-default" style="display:hidden;" ></span>',t+="</a>";t+="</div>"}else{(u=[0,parseInt(e.column_array[1]),parseInt(e.column_array[2]),parseInt(e.column_array[3]),parseInt(e.column_array[4]),parseInt(e.column_array[5])])[l=parseInt(answer_given[current_question])]++;var n=parseInt(e.correct_answer),a=u[1]+u[2]+u[3]+u[4]+u[5];for(t+='<div class="list-group">',i=1;i<=e.num_of_options;i++)badge_colour="badge-secondary",colour="grey",border_left="thick solid white",i==l&&i!=n&&(badge_colour="badge-danger",colour="red",border_left="thick solid red"),i==n&&(badge_colour="badge-success",colour="green",border_left="thick solid green"),t+='<a href="#" style="background-image: url(https://d32xxyeh8kfs8k.cloudfront.net/css/images/'+colour+"bar.png); background-repeat: repeat-y; background-size: "+u[i]/a*100+"%;border-left:"+border_left+'" id="BOFoption'+i+'" class="list-group-item list-group-item-action  justify-content-between d-flex align-items-center" >',t+=""+e.options[i],t+='<span id="popularity_badge'+i+'" class="score-badge badge badge-pill '+badge_colour+'">'+Math.round(u[i]/a*100)+"%</span>",t+="</a>";t+="</div>",t+="<br>",""!=e.concept&&(extended_concept_functionality?(0==cr[current_question]?(t+='<div class="alert alert-success" role="alert">',t+=e.concept,t+='<div id="question_concept_rating_div" class="text-right" style ="font-size:70%;">',t+='<a href="#" class="rate_question_concept" data-cid="'+e.concept_id_link+'" data-rating="1" style ="color:#222;">Important for me</a>',t+='<a href="#" class="rate_question_concept" data-cid="'+e.concept_id_link+'" data-rating="0" style ="color:red; padding-left:15px;">Less important</a>',t+="</div>",t+='<div id="question_concept_percentile_div" class="text-right" style ="font-size:70%;display: none;">'):(t+='<div class="alert alert-success" role="alert">',t+=e.concept,t+='<div id="question_concept_percentile_div" class="text-right" style ="font-size:70%;">'),t+="Importance: <b>"+e.concept_percentile+"</b>",t+="</div>"):(t+='<div class="alert alert-success" role="alert">',t+=e.concept),t+="</div>",t+=""),t+=e.question_notes,t+="<br>",""!=e.exam_specific_explanation&&(t+="<br>",t+=e.exam_specific_explanation,t+="<br>")}if(1==e.question_type){for(t+="<b>Theme: </b>"+e.theme,t+="<br><br>",t+="<table>",i=1;i<=10;i++)""!=e.options[i]&&(t+="<tr><td><b>"+alphabet[i]+".</b></td><td>"+e.options[i]+"</td></tr>");t+="</table>",t+="<br><br>",t+=e.instruction,t+="<br><br>";var o=label[current_question].split("-");for(i=0;i<3;i++){if(t+='<table style="width:100%">',t+='<tr><td style="vertical-align: top;width:35px"><b>'+(parseInt(o[0])+i)+".</b></td><td>"+e.questions[i]+"</td></tr>",t+="<tr><td></td><td>",0==attempted[current_question]){for(t+='<select id="emq'+i+'" data-subquestion="'+i+'" class="custom-select emq_subquestion">',t+='<option value= "0"></option>',j=1;j<=10;j++)""!=e.options[j]&&(t+='<option value= "'+j+'">'+e.options[j]+"</option>");t+="</select>"}else{var s=answer_given[current_question].split(","),r=100-(p=Math.round(100*parseInt(e.column_array[i+1])/Math.max(1,e.number_attempts)));parseInt(s[i])==parseInt(e.answers[i])?(t+='<i class="fa fa-check" style="color:green"></i> ',t+=e.options[e.answers[i]]):(t+='<i class="fa fa-times" style="color:red"></i> ',t+=e.options[s[i]],t+="<br>",t+="The correct answer is: <b>"+e.options[e.answers[i]]+"</b>"),t+=' <span id="popularity_badge'+i+'" class="badge badge-pill badge-secondary float-right" >'+p+"%</span>",t+="<br><br>",t+='<div class="progress">',t+='  <div class="progress-bar bg-success" role="progressbar" style="width: '+p+'%; height: 5px;" ></div>',t+='  <div class="progress-bar bg-danger" role="progressbar" style="width: '+r+'%; height: 5px;" ></div>',t+=" </div>",t+=e.notes[i]}t+="</td></tr>",t+="</table>",t+="<br><br>"}}if(2==e.question_type){var c=0;if(t+=e.question,t+="<br><br>",0==attempted[current_question]){for(t+='<ul id="SJTanswers" class="answerBars">',i=1;i<=5;i++)"timed test"==mode&&0!=answer_given[current_question]?("A"==answer_given[current_question][i-1]&&(c=1),"B"==answer_given[current_question][i-1]&&(c=2),"C"==answer_given[current_question][i-1]&&(c=3),"D"==answer_given[current_question][i-1]&&(c=4),"E"==answer_given[current_question][i-1]&&(c=5)):c=i,t+='<li id = "'+alphabet[c]+'">',t+="<b>"+alphabet[c]+". </b>"+e.options[c],t+="</li>";t+="</ul>",t+='<input type="hidden" id="SJTanswerStr" value="ABCDE">'}else{var u=[0,parseInt(e.column_array[1]),parseInt(e.column_array[2]),parseInt(e.column_array[3]),parseInt(e.column_array[4]),parseInt(e.column_array[5])],d=Math.max(u[1],u[2],u[3],u[4],u[5]);n=e.correct_answer,a=u[1]+u[2]+u[3]+u[4]+u[5];for(t+="Your answer order: <b>"+(l=answer_given[current_question])+"</b>",t+="<br>",t+='<div class="list-group answerBars" id="SJTanswers">',i=1;i<=5;i++)"A"==l[i-1]&&(c=1),"B"==l[i-1]&&(c=2),"C"==l[i-1]&&(c=3),"D"==l[i-1]&&(c=4),"E"==l[i-1]&&(c=5),t+='<a href="#"  class="list-group-item list-group-item-action" id = "'+alphabet[c]+'" >',t+="<b>"+alphabet[c]+". </b>"+e.options[c],t+="</a>";for(t+="</div>",t+="<br>",t+="Correct answer order: <b>"+n+"</b> ",t+="<br>",t+='<div class="list-group questiontype2"  id="SJTanswers" >',i=1;i<=5;i++)"A"==n[i-1]&&(c=1),"B"==n[i-1]&&(c=2),"C"==n[i-1]&&(c=3),"D"==n[i-1]&&(c=4),"E"==n[i-1]&&(c=5),t+='<a href="#" class="list-group-item list-group-item-action" style="background-image: url(https://d32xxyeh8kfs8k.cloudfront.net/css/images/bluebar.png); background-repeat: repeat-y; background-size: '+u[c]/d*100+'%;" id = "'+alphabet[c]+'" >',t+="<b>"+alphabet[c]+". </b>"+e.options[c],t+="</a>";t+="</div>",t+="<br>",""!=e.concept&&(t+='<div class="alert alert-success" role="alert">',t+=e.concept,t+="</div>",t+=""),t+=e.question_notes,t+="<br>"}}if(3==e.question_type){var _="";if(t+=e.question,t+="<br><br>",0==attempted[current_question]){for(t+='<ul class="answerBars"  id="SJTpick3answers" >',i=1;i<=e.num_of_options;i++)_="","timed test"==mode&&0!=answer_given[current_question]&&-1!=answer_given[current_question].indexOf(alphabet[i])&&(_="is_selected"),t+='<li  id = "'+alphabet[i]+'" class="'+_+'">',t+="<b>"+alphabet[i]+". </b>"+e.options[i],t+="</li>";t+="</ul>",t+='<input type="hidden" id="SJTpick3answersStr" value="">'}else{u=[0,parseInt(e.column_array[1]),parseInt(e.column_array[2]),parseInt(e.column_array[3]),parseInt(e.column_array[4]),parseInt(e.column_array[5]),parseInt(e.column_array[6]),parseInt(e.column_array[7]),parseInt(e.column_array[8]),parseInt(e.column_array[9]),parseInt(e.column_array[10])],d=Math.max(u[1],u[2],u[3],u[4],u[5],u[6],u[7],u[8],u[9],u[10]);console.log("big:"+d);n=e.correct_answer,a=u[1]+u[2]+u[3]+u[4]+u[5]+u[6]+u[7]+u[8]+u[9]+u[10];var l=answer_given[current_question];for(t+='<div class="list-group questiontype3 "  id="SJTpick3answers" >',i=1;i<=e.num_of_options;i++)_="white_outline",-1!=l.indexOf(alphabet[i])&&(_="red_outline"),-1!=n.indexOf(alphabet[i])&&(_="green_outline"),console.log("this:"+u[i]),t+='<a href="#" style="background-image: url(https://d32xxyeh8kfs8k.cloudfront.net/css/images/bluebar.png); background-repeat: repeat-y; background-size: '+u[i]/d*100+'%;" id = "'+alphabet[i]+'" class="'+_+' list-group-item list-group-item-action" >',t+="<b>"+alphabet[i]+". </b>"+e.options[i],t+="</a>";t+="</div>",t+="<br>",""!=e.concept&&(t+='<div class="alert alert-success" role="alert">',t+=e.concept,t+="</div>",t+=""),t+=e.question_notes,t+="<br>"}}if(4==e.question_type)if(t+=e.question,t+="<br><br>",0==attempted[current_question])t+='Answer: <input type="text" id="text_answer" size ="10" maxlength="10" > ',t+=e.answer_suffix,t+="<br><br>","timed test"==mode&&(t+='<button id="store_text_answer" class="btn btn-primary">Store answer</button>');else{t+="You answered: "+answer_given[current_question],t+=e.answer_suffix,t+=" "+return_score_text(4,score[current_question]),0==score[current_question]&&(t+="<br><br><b> The correct answer is: "+e.correct_answer+" "+e.answer_suffix+"</b>");var p;r=100-(p=Math.round(100*parseInt(e.column_array[1])/Math.max(1,e.number_attempts)));t+=' <span id="popularity_badge'+i+'" class="badge badge-pill badge-secondary float-right" >'+p+"%</span>",t+="<br>",t+='<div class="progress">',t+='  <div class="progress-bar bg-success" role="progressbar" style="width: '+p+'%; height: 5px;" ></div>',t+='  <div class="progress-bar bg-danger" role="progressbar" style="width: '+r+'%; height: 5px;" ></div>',t+=" </div>",t+="<br>",t+="<br>",t+=e.question_notes,t+="<br>",""!=e.exam_specific_explanation&&(t+="<br>",t+=e.exam_specific_explanation,t+="<br>")}current_question>highest_question&&(highest_question=current_question),0==attempted[current_question]?(t+="<br>","standard"==mode&&(t+='<button id="submit_answer" class="btn btn-primary">Submit answer</button>')):(notes_html_to_display="",notes_html_to_display+="<br>",notes_html_to_display+="<h4 id='notetitle' class='text-primary'>"+e.title+"</h4>",notes_html_to_display+="<br>",notes_html_to_display+="<div id='notecontent'>"+e.body+"</div>",$("#div_notes").html(notes_html_to_display),0<e.comment_count?$("#comment_count").html("("+e.comment_count+")"):$("#comment_count").html("")),$("#div_question").empty().html(t),$(".fancybox").fancybox({autoSize:!0,fitToView:!1,maxWidth:940}),2==e.question_type&&0==attempted[current_question]&&$("#SJTanswers").sortable({stop:function(e,t){var n="",i=$("#SJTanswers").sortable("toArray");for(index in i)n+=i[index];$("#SJTanswerStr").val(n),"timed test"==mode&&(answer_given[current_question]=$("#SJTanswerStr").val(),$.ajax({type:"GET",url:"timed_test_ajax.php",data:"q="+current_question+"&a="+answer_given[current_question],success:function(e){update_dashboard()}}))}}),0==attempted[current_question]||(setTimeout(function(){$("#user_notes").summernote("code",e.user_notes)},0),""==e.links?($("#div_links").html(""),$("#div_no_links").show(),$("#div_links_wrapper").hide()):($("#div_links").html(e.links),$("#div_no_links").hide(),$("#div_links_wrapper").show()),""==e.media?($("#div_media").html(""),$("#div_no_media").show(),$("#div_media_wrapper").hide()):($("#div_media").html(e.media),$("#div_no_media").hide(),$("#div_media_wrapper").show())),0==attempted[current_question]?"standard"==mode&&$("#div_dashboard_wrapper").css("opacity",.5):($("#google_search").attr("href","https://www.google.co.uk/#q="+e.title),$("#google_search").html('<i class="fa fa-search"></i> Google search on "'+e.title+'"'),"standard"==mode&&$("#div_dashboard_wrapper").css("opacity",1)),$("html, body").scrollTop(0),update_question_nav(),update_dashboard(),0==attempted[current_question]?($("#div_avoid_reflow_col1, #div_search_wrapper, #div_links_wrapper, #div_media_wrapper, #div_no_links, #div_no_media").hide(),$("#div_ref_range_wrapper").show(),$("#ref_range").collapse("hide")):($("#div_question_rating, #div_discuss_question, #div_improve_question, #div_ref_range_wrapper").hide(),$(".question_rating").prop("disabled",!1),$(".suggestion").prop("disabled",!1),$("#improve_textarea").val(""),$("#div_search_wrapper, #div_avoid_reflow_col1").show()),extended_concept_functionality&&1==attempted[current_question]&&-1!=$("#notecontent").html().indexOf("data-cid")&&$.get("ajax_notes_with_concepts.php?nid="+e.notes_id_link,"json").done(function(e){$("#notecontent").html(e.body),console.log(e.log),$('[data-toggle="popover"]').popover({trigger:"focus"})}).fail(function(e,t,n){alert("Please report the following error code: "+t+" : "+e.responseText)})}function display_question(t){if(current_question=t,question_in_cache==t?write_question_to_screen(question_data=cache_data):$.get("ajax_question_data.php?q="+t,"json").done(function(e){(question_data=e).question=r(question_data.question,t),question_data.questions[0]=r(question_data.questions[0],t),write_question_to_screen(question_data)}).fail(function(e,t,n){"error"==t?alert("You're current session has timed out. All your data has been saved. Please log back in."):alert("Please report the following error code: "+t+" : "+e.responseText)}),t<question_count-1){var n=t+1;$.get("ajax_question_data.php?q="+n,"json").done(function(e){(cache_data=e).question=r(cache_data.question,n),cache_data.questions[0]=r(cache_data.questions[0],n),question_in_cache=n}).fail(function(e,t,n){"error"==t?alert("You're current session has timed out. All your data has been saved. Please log back in."):alert("Please report the following error code: "+t+" : "+e.responseText)})}}function update_question_nav(){0==current_question?$("#previous_question").attr("disabled",!0):$("#previous_question").attr("disabled",!1),current_question<question_count-1?($("#next_question").attr("disabled",!1),$(".post_question_next_question").show()):($("#next_question").attr("disabled",!0),$(".post_question_next_question").hide()),1==attempted[current_question]&&"timed test"!=mode?$("#navTickCross").html(return_score_text(question_type[current_question],score[current_question])):$("#navTickCross").html(""),0==f[current_question]?$("#navFlag").html('<button id="flagbutton" type="button" class="btn btn-link"><i class="fa fa-flag-o" style="color:#888;"></i></button>'):$("#navFlag").html('<button id="flagbutton" type="button" class="btn btn-link"><i class="fa fa-flag" style="color:red"></i></button>'),$("#questionXofY").html("<span class='small_text_mobile'>Q<span id='question-prefix'>uestion </span>"+label[current_question]+"<span id='question-suffix'> of "+question_count_label+"</span></span>")}function return_score_text(e,t){if(0==e||4==e)return 0==t?'<i class="fa fa-times" style="color:red"></i>':'<i class="fa fa-check" style="color:green"></i>';if(1==e){if(0==t)return'<font color = "red"><b>0<span class="hide_this_if_mobile"> / 3</span></b></font>';if(1==t||2==t)return'<font color = "orange"><b>'+t+'<span class="hide_this_if_mobile"> / 3</span></b></font>';if(3==t)return'<font color = "green"><b>3<span class="hide_this_if_mobile"> / 3</span></b></font>'}if(2==e||3==e){if(0==t||2==t||4==t)return'<font color = "red"><b>'+t+'<span class="hide_this_if_mobile"> / 12</span></b></font>';if(6==t||8==t)return'<font color = "orange"><b>'+t+'<span class="hide_this_if_mobile"> / 12</span></b></font>';if(10==t||12==t)return'<font color = "green"><b>'+t+'<span class="hide_this_if_mobile"> / 12</span></b></font>'}}function update_dashboard(){if("standard"==mode){var e="";e+="Score: <b>",e+=Math.round(100*running_score/Math.max(1,running_attempted)*10)/10,e+="%</b><br>",$("#div_score").html(e)}else $("#div_score").html("Dashboard");var t="";t+="<table class='dashboard-table'>";for(var n=0;n<=highest_question;n++){if(t+="<tr>",current_question==n?t+="<td align ='center' width ='40'><b>"+label[n]+"</b></td>":t+="<td align ='center' width ='40'><a href='#' class ='move_to_question' data-destination='"+n+"'>"+label[n]+"</a></td>",t+="<td width ='40'>",0==attempted[n])if("timed test"==mode){if(0==question_type[n]&&(t+=alphabet[parseInt(answer_given[n])]),1==question_type[n]){var i=answer_given[n];for(cnt=alphabet.length-1,j=cnt;0<=j;j--)i=i.replace(j,alphabet[j]);t+=i}2!=question_type[n]&&3!=question_type[n]||(0==answer_given[n]?t+="-":t+=answer_given[n]),4==question_type[n]&&(t+=answer_given[n].substring(0,5))}else t+="-";else t+=return_score_text(question_type[n],score[n]);t+="</td>",t+="<td>",1==f[n]&&(t+='<i class="fa fa-flag" style="color:red"></i>'),t+="</td>",t+="</tr>"}t+="</table>",$("#div_dashboard").html(t)}$("body").on("click",".sba-option",function(e){e.preventDefault();var t=$(this).data("optionnum");$("#optionsRadio"+t).prop("checked",!0)}),$("body").on("click tap","ul#SJTpick3answers li",function(e){$("#"+e.currentTarget.id).toggleClass("is_selected");var t="";$("ul#SJTpick3answers li").each(function(e){id=$(this).attr("id"),$("#"+id).hasClass("is_selected")&&(t+=id)}),$("#SJTpick3answersStr").val(t),"timed test"==mode&&(answer_given[current_question]=$("#SJTpick3answersStr").val(),$.ajax({type:"GET",url:"timed_test_ajax.php",data:"q="+current_question+"&a="+answer_given[current_question],success:function(e){update_dashboard()}}))}),"timed test"!=mode?$("body").on("click","#submit_answer",function(e){if(0==question_data.question_type&&(null==$("input[name=optionsRadio]:checked").val()?alert("Please select an option before submitting the answer"):(attempted[current_question]=1,running_attempted+=1,answer_given[current_question]=$("input[name=optionsRadio]:checked").val(),parseInt(answer_given[current_question])==parseInt(question_data.correct_answer)?(score[current_question]=1,running_score+=1):score[current_question]=0)),1==question_data.question_type)if(0==$("#emq0").val()||0==$("#emq1").val()||0==$("#emq2").val())alert("Please select an option for all the questions before submitting the answer");else for(attempted[current_question]=1,running_attempted+=3,answer_given[current_question]=$("#emq0").val()+","+$("#emq1").val()+","+$("#emq2").val(),score[current_question]=0,i=0;i<3;i++)parseInt($("#emq"+i).val())==parseInt(question_data.answers[i])?(score[current_question]+=1,score_array[current_question][i]=1,running_score+=1):score_array[current_question][i]=0;if(2==question_data.question_type)if(""==$("#SJTanswerStr").val());else{attempted[current_question]=1,running_attempted+=12,answer_given[current_question]=$("#SJTanswerStr").val();var t=$("#SJTanswerStr").val(),n=[],a=0;for(i=0;i<=4;i++)a=t.indexOf(question_data.correct_answer[i]),n[i]=Math.abs(i-a);var o=12-(n[0]+n[1]+n[2]+n[3]+n[4]);score[current_question]=o,running_score+=o,score_array[current_question][0]=5-t.indexOf("A"),score_array[current_question][1]=5-t.indexOf("B"),score_array[current_question][2]=5-t.indexOf("C"),score_array[current_question][3]=5-t.indexOf("D"),score_array[current_question][4]=5-t.indexOf("E")}if(3==question_data.question_type)if(3!=$("#SJTpick3answersStr").val().length)alert("Please pick 3 options");else{attempted[current_question]=1,running_attempted+=12,answer_given[current_question]=$("#SJTpick3answersStr").val();t=$("#SJTpick3answersStr").val(),a=0,o=0;for(i=0;i<question_data.correct_answer.length;i++)-1!=question_data.correct_answer.indexOf(t[i])&&(o+=4);for(score[current_question]=o,running_score+=o,i=0;i<10;i++)-1!=t.indexOf(alphabet[i+1])?score_array[current_question][i]=1:score_array[current_question][i]=0}4==question_data.question_type&&(""==$("#text_answer").val()?alert("Please enter an answer in the text box before submitting"):(attempted[current_question]=1,running_attempted+=1,answer_given[current_question]=$("#text_answer").val(),(t=(t=$("#text_answer").val().toUpperCase().trim()).replace("MLS","").replace("ML","").replace("MGS","").replace("MG",""))==question_data.correct_answer.toUpperCase().trim()?(score[current_question]=1,running_score+=1):score[current_question]=0));1==attempted[current_question]&&($.post("store_question_answer.php",{q:current_question,question_id:question_id[current_question],answer:answer_given[current_question],score:score[current_question],score_array:score_array[current_question],concept_id_link:question_data.concept_id_link,notes_id_link:question_data.notes_id_link}).done(function(e){"success"==e&&(successfully_saved_answer[current_question]=1)}),write_question_to_screen(question_data))}):($("body").on("click",".sba-option",function(e){answer_given[current_question]=$("input[name=optionsRadio]:checked").val(),$.ajax({type:"GET",url:"timed_test_ajax.php",data:"q="+current_question+"&a="+answer_given[current_question],success:function(e){update_dashboard()}})}),$("body").on("change",".emq_subquestion",function(e){var t=$(this).data("subquestion"),n=$(this).val();"0"==answer_given[current_question]&&(answer_given[current_question]="-,-,-");var i=answer_given[current_question].split(",");i[t]=n,answer_given[current_question]=i.join(),$.ajax({type:"GET",url:"timed_test_ajax.php",data:"q="+current_question+"&a="+n+"&n="+t,success:function(e){update_dashboard()}})}),$("body").on("click","#store_text_answer",function(e){answer_given[current_question]=$("#text_answer").val(),$.ajax({type:"GET",url:"timed_test_ajax.php",data:"q="+current_question+"&a="+answer_given[current_question],success:function(e){update_dashboard()}})})),$("#previous_question").click(function(){0<current_question&&display_question(current_question-1)}),$("#next_question, .post_question_next_question").click(function(){current_question<question_count-1&&display_question(current_question+1)}),$("body").on("click",".move_to_question",function(e){display_question($(this).data("destination"))}),"timed test"!=mode&&$("#div_dashboard_wrapper").mouseenter(function(){$("#div_dashboard_wrapper").css("opacity",1)}).mouseleave(function(){$("#div_dashboard_wrapper").css("opacity",.5)}),$("body").on("click","#flagbutton",function(e){f[current_question]=1-f[current_question],update_question_nav(),update_dashboard(),$.post("set_flag_ajax.php",{q:current_question,f:f[current_question]},function(e){})}),display_question(current_question),$("body").on("click",".rate-media",function(e){var t=$(this).data("mediaid"),n=$(this).data("rating");$.post("../common/add_rating.php",{entity_type:7,entity_id_link:t,rating:$(this).data("rating"),entity_parent:0,notes_id:question_data.notes_id_link},function(e){"no"==e.duplicate?1==n?$("#media_good_count_"+t).text(parseInt($("#media_good_count_"+t).text())+1):$("#media_bad_count_"+t).text(parseInt($("#media_bad_count_"+t).text())+1):alert("You've already rated this item")},"json")}),$("body").on("click",".rate-link",function(e){var t=$(this).data("linkid"),n=$(this).data("rating");$.post("../common/add_rating.php",{entity_type:6,entity_id_link:t,rating:$(this).data("rating"),entity_parent:0,notes_id:question_data.notes_id_link},function(e){"no"==e.duplicate?1==n?$("#link_good_count_"+t).text(parseInt($("#link_good_count_"+t).text())+1):$("#link_bad_count_"+t).text(parseInt($("#link_bad_count_"+t).text())+1):alert("You've already rated this item")},"json")}),$("body").on("click",".addlink, .addmedia",function(e){$("#inputSource, #inputTitle, #inputURL").val(""),$("#suggestlinkModal").modal("show")}),$("body").on("click","#brokenlink",function(e){$.post("post_feedback.php",{feedback:"Broken link:<br><BR>"+$("#notestitleblock").html(),q:question_data.notes_id_link,ft:"L"},function(e){alert("Thank you for reporting a broken link - we will review this as soon as possible.")})}),$("body").on("click","#brokenmedia",function(e){$.post("post_feedback.php",{feedback:"Broken media:<br><BR>"+$("#notestitleblock").html(),q:question_data.notes_id_link,ft:"V"},function(e){alert("Thank you for reporting a broken media link - we will review this as soon as possible.")})}),$("#submitnewlink").click(function(){$.post("post_feedback.php",{feedback:"Link suggestion:<br><br>"+$("#inputSource").val()+"<BR><BR>"+$("#inputTitle").val()+"<BR><BR>"+$("#inputURL").val()+"<BR><BR>"+$("#notestitleblock").html(),q:question_data.notes_id_link,ft:"N"},function(e){$("#inputSource, #inputTitle, #inputURL").val(""),$("#suggestlinkModal").modal("hide"),alert("Thank you for your suggestion  - we will review and add this as soon as possible.")})}),$("body").on("click",".media_link",function(e){var t=$(this).data("url")+"?modestbranding=1&rel=0&showinfo=0&html5=1&autoplay=1";$("#mediaModal-title").text($(this).data("description")),$("#mediaModal iframe").attr("src",t),$("#mediaModal button.close").click(function(){$("#mediaModal iframe").attr("src","")}),$("#mediaModal").modal("show")}),$("#mediaModal").on("hidden.bs.modal",function(e){$("#mediaModal").find("iframe").attr("src","")}),$(".question_rating").click(function(){var a=parseInt($(this).data("rating"));$.post("../common/add_rating.php",{entity_type:1,entity_id_link:question_data.question_id,rating:a,entity_parent:0,notes_id:question_data.notes_id_link},function(e){var t=Math.round(100*parseInt(e.good_votes)/Math.max(1,parseInt(e.good_votes)+parseInt(e.bad_votes))),n=100-t,i="<br>";i+='<span style="color:green"><i class="fa fa-thumbs-up"></i> '+e.good_votes+'</span>&nbsp;&nbsp;<span style="color:red"><i class="fa fa-thumbs-down"></i> '+e.bad_votes+'</span> <span id="thank_you_rating">Thank you for rating this question</span>',i+='<div class="progress">',i+='  <div class="progress-bar bg-success" role="progressbar" style="width: '+t+'%; height: 5px;" ></div>',i+='  <div class="progress-bar bg-danger" role="progressbar" style="width: '+n+'%; height: 5px;" ></div>',i+=" </div>",$("#div_question_rating").html(i).show(),"no"==e.duplicate?($("#thank_you_rating").fadeOut(2e3),0==a&&setTimeout(function(){$("#improve_question").click(),$("#improve_textarea").focus()},400)):($("#thank_you_rating").hide(),alert("You've already rated this question"))},"json"),$(".question_rating").prop("disabled",!0)}),$("body").on("click",".rate_question_concept",function(e){e.preventDefault();var t=$(this).data("cid"),n=$(this).data("rating");$.post("../common/add_rating.php",{entity_type:3,entity_id_link:t,rating:n,entity_parent:0,notes_id:question_data.notes_id_link},function(e){cr[current_question]=1,$("#question_concept_percentile_div").show(),1==n?$("#question_concept_rating_div").html("We've marked this as an important fact for you."):$("#question_concept_rating_div").html("We've marked this as less important fact for you."),$("#question_concept_rating_div").fadeOut(3e3)})}),$("body").on("click",".flag_comment",function(e){e.preventDefault();var t=$(this).data("qaid");if(!confirm("Would you like to report this comment to our admin team?"))return!1;$.post("../qa/add_qa_comment_flag.php",{qa_id:t},function(e){})}),$("#discuss_question").click(function(){paneltype="Q",panelkey=question_data.question_id,$("#div_discuss_question_content").empty().load("../qa/show_qa6.php",{qid:panelkey,ptype:paneltype},function(){}),$("#div_improve_question").hide(),$("#div_discuss_question").toggle()}),$("body").on("click","#Qsubmitnewqa",function(e){$.post("../qa/add_qa.php",{qid:panelkey,response:0,responseidlink:0,comment:$("#"+paneltype+"newqa").val(),nickname:$("#"+paneltype+"nickname").val()},function(e){$("#div_discuss_question_content").empty().load("../qa/show_qa6.php",{qid:panelkey,ptype:paneltype},function(){question_data.comment_count++,$("#comment_count").html("("+question_data.comment_count+")")})})}),$("body").on("click",".Qsubmitqaresponse",function(e){qarid=$(this).data("responseidlink"),$.post("../qa/add_qa.php",{qid:panelkey,response:1,responseidlink:qarid,comment:$("#"+paneltype+"qar_"+qarid).val(),nickname:$("#"+paneltype+"nickname").val()},function(e){$("#div_discuss_question_content").empty().load("../qa/show_qa6.php",{qid:panelkey,ptype:paneltype},function(){})})}),$("body").on("click","#Qpostasanon",function(e){$("#"+paneltype+"nickname").val("Anonymous")}),$("body").on("click",".rate-comment",function(e){var t=$(this).data("qaid");$.post("../common/add_rating.php",{entity_type:5,entity_id_link:t,rating:$(this).data("rating"),entity_parent:question_data.question_id},function(e){overall_rating=e.good_votes-e.bad_votes,$("#comment_rating_"+t).html(overall_rating)},"json")}),$("#improve_question").click(function(){$("#div_discuss_question").hide(),$("#div_improve_question").toggle()}),$.fn.focusToEnd=function(){return this.each(function(){var e=$(this).val();$(this).focus().val("").val(e)})},$(".suggestion").click(function(){var e=$(this).data("suggestion");$("#improve_textarea").val(e),$("#improve_textarea").focus().focusToEnd(),$(".suggestion").prop("disabled",!0)}),$("#submit_improve").click(function(){$.post("post_feedback.php",{feedback:$("#improve_textarea").val(),q:current_question,ft:"Q"},function(e){alert("Thank you for your feedback  - all comments are reviewed and acted upon"),$("#div_improve_question").hide(),$("#improve_textarea").val("")})}),$("#searchtext").keyup(function(e){13==e.keyCode&&$("#gosearch").click()}),$("#gosearch").click(function(){var e=window.open("../review/textbook.php?s="+$("#searchtext").val(),"_blank");e?e.focus():alert("Please allow popups so that the textbook can be opened")}),$("#savenotes").click(function(){savedata(!0,question_data.notes_id_link)}),$("#div_user_notes_wrapper").mouseleave(function(){savedata(!1,question_data.notes_id_link)}),$(".summernote").summernote({toolbar:[["style",["bold","italic","clear"]],["color",["color"]],["para",["ul","ol","paragraph"]],["height",["height"]],["table",["table"]],["picture",["picture"]],["link",["link"]]]}),$(".note-popover").css({display:"none"});
        
           });
           </script>