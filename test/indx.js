function daly(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.info("daly function" + time);
      resolve()
    }, time)
  })
}


async function asyncFun() {
  let startTime = new Date()
  await daly(2000)
  await daly(3000)
  console.info(+new Date() - startTime);
}


asyncFun()
