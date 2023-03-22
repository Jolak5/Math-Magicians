import React, { useState, useEffect } from "react";

function GetData() {
  fetch('https://api.api-ninjas.com/v1/quotes?category=happiness');
  const res = res.json();
  return res;
}
