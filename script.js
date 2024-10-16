const makeChange = (c) => {
  // your name here
	const coin={
	     "q":0,
		 "d":0,
		 "n":0,
		 "p"=0
	};
	   while(c>0)
		{
		  if(c>=25)
		  {
			coin.q= math.floor(c/25);
			  c=c%25
		  }
			else if(c>=10)
		  {
			coin.d= math.floor(c/10);
			  c=c%10
		  }
			else if(c>=5)
		  {
			coin.n= math.floor(c/5);
			  c=c%5
		  }
			else
		  {
			coin.p= math.floor(c/1);
			  c=c%1
		  }
		}
	return coin;
};

// Do not the change the code belo
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
