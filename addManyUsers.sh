#!/bin/bash
let userNumberSuffix=1200
while [ ${userNumberSuffix} -lt 1300 ]
do
  let userNumberSuffix=${userNumberSuffix}+1
  echo "suffix: ${userNumberSuffix}"
  cmd="./addUser.sh ${userNumberSuffix}"
  echo "cmd: ${cmd}"
  eval ${cmd}
done
