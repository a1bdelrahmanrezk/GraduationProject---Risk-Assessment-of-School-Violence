const buttonElem = document.getElementById('change-language');
const body = document.getElementById('survey-body');
/* تغير كلمه السؤال */
const he1 = document.getElementById('he1');
const he2 = document.getElementById('he2');
const he3 = document.getElementById('he3');
const he4 = document.getElementById('he4');
const he5 = document.getElementById('he5');
const he6 = document.getElementById('he6');
const he7 = document.getElementById('he7');
const he8 = document.getElementById('he8');
const he9 = document.getElementById('he9');
const he10 = document.getElementById('he10');
const he11 = document.getElementById('he11');
const he12 = document.getElementById('he12');
const he13 = document.getElementById('he13');
/* تغير محتوي السؤال */
const q1 = document.getElementById('q1');
const q2 = document.getElementById('q2');
const q3 = document.getElementById('q3');
const q4 = document.getElementById('q4');
const q5 = document.getElementById('q5');
const q6 = document.getElementById('q6');
const q7 = document.getElementById('q7');
const q8 = document.getElementById('q8');
const q9 = document.getElementById('q9');
const q10 = document.getElementById('q10');
const q11 = document.getElementById('q11');
const q12 = document.getElementById('q12');
const q13 = document.getElementById('q13');

const ya1 = document.getElementById('ya1');
const na1 = document.getElementById('na1');
const ya2 = document.getElementById('ya2');
const na2 = document.getElementById('na2');
const ya3 = document.getElementById('ya3');
const na3 = document.getElementById('na3');
const ya4 = document.getElementById('ya4');
const na4 = document.getElementById('na4');
const ya5 = document.getElementById('ya5');
const na5 = document.getElementById('na5');
const ya6 = document.getElementById('ya6');
const na6 = document.getElementById('na6');
const ya7 = document.getElementById('ya7');
const na7 = document.getElementById('na7');
const ya8 = document.getElementById('ya8');
const na8 = document.getElementById('na8');
const ya9 = document.getElementById('ya9');
const na9 = document.getElementById('na9');
const ya10 = document.getElementById('ya10');
const na10 = document.getElementById('na10');
const ya12 = document.getElementById('ya12');
const na12 = document.getElementById('na12');


const sa1 = document.getElementById('sa1');
const sa2 = document.getElementById('sa2');
const sa3 = document.getElementById('sa3');

const fa1 = document.getElementById('fa1');
const fa2 = document.getElementById('fa2');
const fa3 = document.getElementById('fa3');
const fa4 = document.getElementById('fa4');

const sub = document.getElementById('sub');
const fill = document.getElementById('fill');
const qo = document.getElementById('qo');



buttonElem.addEventListener('click', () => {
    if (
        he1.textContent === 'Question: 1' &&
        he2.textContent === 'Question: 2' &&
        he3.textContent === 'Question: 3' &&
        he4.textContent === 'Question: 4' &&
        he5.textContent === 'Question: 5' &&
        he6.textContent === 'Question: 6' &&
        he7.textContent === 'Question: 7' &&
        he8.textContent === 'Question: 8' &&
        he9.textContent === 'Question: 9' &&
        he10.textContent === 'Question: 10' &&
        he11.textContent === 'Question: 11' &&
        he12.textContent === 'Question: 12' &&
        he13.textContent === 'Question: 13' &&
        ya1.textContent === 'YES' &&
        na1.textContent === 'NO' &&
        ya2.textContent === 'YES' &&
        na2.textContent === 'NO' &&
        ya3.textContent === 'YES' &&
        na3.textContent === 'NO' &&
        ya4.textContent === 'YES' &&
        na4.textContent === 'NO' &&
        ya5.textContent === 'YES' &&
        na5.textContent === 'NO' &&
        ya6.textContent === 'YES' &&
        na6.textContent === 'NO' &&
        ya7.textContent === 'YES' &&
        na7.textContent === 'NO' &&
        ya8.textContent === 'YES' &&
        na8.textContent === 'NO' &&
        ya9.textContent === 'YES' &&
        na9.textContent === 'NO' &&
        ya10.textContent === 'YES' &&
        na10.textContent === 'NO' &&
        ya12.textContent === 'You\'ll help him/her' &&
        na12.textContent === 'You\'ll ignore him/her' &&
        fill.textContent === 'Please fill Survey 😊' &&
        qo.textContent === 'Children are human beings to whom respect is due, superior to us by reason of their innocence and of the greater possibilities of their future' &&
        sa1.textContent === 'Brick or Stone' &&
        sa2.textContent === 'White weapon (razor, knife)' &&
        sa3.textContent === 'Use your power' &&
        buttonElem.textContent==='Change Language'&&
        fa1.textContent === 'Uneducated' &&
        fa2.textContent === 'At least one of the parents or both have a university education' &&
        fa3.textContent === 'Both parents have a high school diploma' &&
        fa4.textContent === 'Parents have less than a high school diploma' &&
        sub.textContent === 'Submit Form' &&
        q1.textContent === 'Do you feel happy when others suffer?'&&
        q2.textContent === 'Do you prefer games that are based on violence?'&&
        q3.textContent === 'Do you have severe emotional outbursts?'&&
        q4.textContent === 'Do you bully others physically or online?'&&
        q5.textContent === 'Do you feel angry or lose your temper often?'&&
        q6.textContent === 'Have you ever been cruel to an animal?'&&
        q7.textContent === 'Are your parents wanted by the police or have they committed a crime before?'&&
        q8.textContent === 'Any of these actions you have done before or are still doing:<br>&dot;Trespassing<br>&dot;School Escape<br>&dot;Threatening Your Colleagues<br>&dot;You have physical injuries from fights<br>&dot;You\'re hitting your Colleagues or others in fights<br>&dot;Frequent refusal to command parents or others in authority<br>&dot;Drug abuse, cigarettes, hookah or drinking alcohol'&&
        q9.textContent === 'Did your father lose his job sometime for a long time?'&&
        q10.textContent === 'Is there a family member addicted to alcohol or drugs?'&&
        q11.textContent === 'When you get into a fight, what you use?'&&
        q12.textContent === 'What would you do if you witnessed someone being abused?'&&
        q13.textContent === 'What is your parental education level? (either of them)'
        ) {
        

        he1.textContent = 'السؤال الأول';
        he2.textContent = 'السؤال الثاني';
        he3.textContent = 'السؤال الثالث';
        he4.textContent = 'السؤال الرابع';
        he5.textContent = 'السؤال الخامس';
        he6.textContent = 'السؤال السادس';
        he7.textContent = 'السؤال السابع';
        he8.textContent = 'السؤال الثامن';
        he9.textContent = 'السؤال التاسع';
        he10.textContent = 'السؤال العاشر';
        he11.textContent = 'السؤال الحادي عشر';
        he12.textContent = 'السؤال الثاني عشر';
        he13.textContent = 'السؤال الثالث عشر';
        ya1.textContent = 'نعم';
        na1.textContent = 'لا';
        ya2.textContent = 'نعم';
        na2.textContent = 'لا';
        ya3.textContent = 'نعم';
        na3.textContent = 'لا';
        ya4.textContent = 'نعم';
        na4.textContent = 'لا';
        ya5.textContent = 'نعم';
        na5.textContent = 'لا';
        ya6.textContent = 'نعم';
        na6.textContent = 'لا';
        ya7.textContent = 'نعم';
        na7.textContent = 'لا';
        ya8.textContent = 'نعم';
        na8.textContent = 'لا';
        ya9.textContent = 'نعم';
        na9.textContent = 'لا';
        ya10.textContent = 'نعم';
        na10.textContent = 'لا';
        ya12.textContent = 'سوف أقوم بمساعدته / ها';
        na12.textContent = 'سوف أتجاهله/ ها';
        sub.textContent = 'تسجيل';
        q1.textContent = 'هل تشعر بسعادة عندما يتألم الاخرين؟';
        q2.textContent = 'هل تحب الالعاب العنيفة؟';
        q3.textContent = 'هل عادة ما تتأثر بالمواقف العاطفية؟';
        q4.textContent = 'هل عادة ما تتنمر علي احد سواء مع اصدقائك او علي مواقع التواصل الاجتماعي؟';
        q5.textContent = 'هل تغضب او تفقد اعصابك باستمرار؟';
        q6.textContent = 'هل تقسو علي الحيوانات الاليفة؟';
        q7.textContent = 'هل لأحد من والديك ملف جنائي؟';
        q9.textContent = 'هل والدك فقد عمله لوقت طويل؟';
        q10.textContent = 'هل احد من عائلتك مدمن الخمور او المخدرات؟';
        q11.textContent = 'ماذا تستخدم عندما تدخل في عراك مع احد؟';
        q12.textContent = 'ماذا ستفعل اذا رايت شخصا يتعرض لايذاء او خطر او عنف؟';
        q13.textContent = 'ماهو المستوى التعليمي عند والديك (اى منهما)؟';
        
        sa1.textContent = 'أستخدم الحجر';
        sa2.textContent = 'أستخدم الة حادة';
        sa3.textContent = 'أستخدم قوتي';
        q8.textContent = 'هل فعلت اي من الاحداث الاتية: *التعدي علي ممتلكات الغير *الهروب من المدرسة *تهديد زملائك  *هل ادي التشاجر مع احد الي وجود اصابات *هل تضرب احد *هل ترفض ان تلبي كلام ابيك *هل تشرب مواد كحولية او مخدرات';
        fa1.textContent = 'الوالدان غير متعلمين' ;
        fa2.textContent = 'أحدهم علي الأقل لديه مؤهل عالي' ;
        fa3.textContent = 'كليهما لديه تعليم متوسط (ثانوية)';
        fa4.textContent = 'كليهما لديه تعليم ما قبل الثانوي' ;
        fill.textContent = 'من فضلك قم بملئ الاستبيان الاتي😊' ;
        buttonElem.textContent='تغيير اللغة';
        qo.textContent = 'الأطفال هم بشر يستحقون الاحترام ، ويتفوقون علينا بحكم براءتهم وإمكانيات مستقبلهم الأكبر.';
        body.setAttribute('dir', 'rtl');

    } else {
        he1.textContent = 'Question: 1';
        he2.textContent = 'Question: 2';
        he3.textContent = 'Question: 3';
        he4.textContent = 'Question: 4';
        he5.textContent = 'Question: 5';
        he6.textContent = 'Question: 6';
        he7.textContent = 'Question: 7';
        he8.textContent = 'Question: 8';
        he9.textContent = 'Question: 9';
        he10.textContent = 'Question: 10';
        he11.textContent = 'Question: 11';
        he12.textContent = 'Question: 12';
        he13.textContent = 'Question: 13';
        ya1.textContent = 'YES';
        na1.textContent = 'NO';
        ya2.textContent = 'YES';
        na2.textContent = 'NO';
        ya3.textContent = 'YES';
        na3.textContent = 'NO';
        ya4.textContent = 'YES';
        na4.textContent = 'NO';
        ya5.textContent = 'YES';
        na5.textContent = 'NO';
        ya6.textContent = 'YES';
        na6.textContent = 'NO';
        ya7.textContent = 'YES';
        na7.textContent = 'NO';
        ya8.textContent = 'YES';
        na8.textContent = 'NO';
        ya9.textContent = 'YES';
        na9.textContent = 'NO';
        ya10.textContent = 'YES';
        na10.textContent = 'NO';
        ya12.textContent = 'You\'ll help him/her';
        na12.textContent = 'You\'ll ignore him/her';
        q1.textContent = 'Do you feel happy when others suffer?';
        sa1.textContent = 'Brick or Stone';
        sa2.textContent = 'White weapon (razor, knife)';
        sa3.textContent = 'Use your power';
        fa1.textContent = 'Uneducated' ;
        fa2.textContent = 'At least one of the parents or both have a university education' ;
        fa3.textContent = 'Both parents have a high school diploma';
        fa4.textContent = 'Parents have less than a high school diploma' ;
        q1.textContent = 'Do you feel happy when others suffer?';
        q2.textContent = 'Do you prefer games that are based on violence?';
        q3.textContent = 'Do you have severe emotional outbursts?';
        q4.textContent = 'Do you bully others physically or online?';
        q5.textContent = 'Do you feel angry or lose your temper often?';
        q6.textContent = 'Have you ever been cruel to an animal?';
        q7.textContent = 'Are your parents wanted by the police or have they committed a crime before?';
        q9.textContent = 'Did your father lose his job sometime for a long time?';
        q10.textContent = 'Is there a family member addicted to alcohol or drugs?';
        q11.textContent = 'When you get into a fight, what you use?';
        q12.textContent = 'What would you do if you witnessed someone being abused?';
        q13.textContent = 'What is your parental education level? (either of them)';
        sub.textContent = 'Submit Form';
        fill.textContent = 'Please fill Survey 😊' ;
        buttonElem.textContent='Change Language';
        q8.textContent = 'Any of these actions you have done before or are still doing:<br>&dot;Trespassing<br>&dot;School Escape<br>&dot;Threatening Your Colleagues<br>&dot;You have physical injuries from fights<br>&dot;You\'re hitting your Colleagues or others in fights<br>&dot;Frequent refusal to command parents or others in authority<br>&dot;Drug abuse, cigarettes, hookah or drinking alcohol';
        qo.textContent = 'Children are human beings to whom respect is due, superior to us by reason of their innocence and of the greater possibilities of their future';
        body.setAttribute('dir', 'ltr');
    }
});