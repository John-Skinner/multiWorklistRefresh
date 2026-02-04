#!/bin/bash
export USER_NUMBER=$1
npx playwright test createManyUsers.spec.ts --headed
