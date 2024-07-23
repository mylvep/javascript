const year=Number(prompt("몇년생"))
const isAdult=2025-year>=20?"성인" : " 미성년자"
 console.log(`&{isAdult}`)

 const height = Number(prompt("키 몇"))
 const canRide = height>=140? " 탑승 가능": " 응안됨"
console.log(canRide);

const gender=prompt("성별")
const age=Number(prompt("나이 입력"))
const army=gender=="남" && age >=20? " 징집대상": "징집 노"
console.log(`님은 ${army}`)

const totla=Number(prompt("총구매금액"));
const cost=total>=50000? total*0.9 : total;
console.log(`다이소 총 구매 금액: ${cost}`)

const age=Number(prompt("나이 얼마임"))
const theage=age>20? "성인": age>13? " 청소년": "어린이"