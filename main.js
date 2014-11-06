function calcscore (scoreArray) {
	
	for (var frame=0; frame < 11; frame++)
	{
		 if (scoreArray[frame][0] == 10) 
		 {
		 //strike
			if (frame == 9) {
				scoreArray[frame][2] = scoreArray[frame-1][2] + 10 + scoreArray[frame+1][0];
			}
			else if (frame == 10) {
				scoreArray[frame][2] = scoreArray[frame-1][2] + 10;
			}
			else 
			{
				console.log(frame);
				if (scoreArray[frame+1][0] == 10)
				{//next frame is a strike as well
				  if (frame == 0)
				  {
					scoreArray[frame][2] = 20 + scoreArray[frame+2][0];
				  }
				  else 
				  {	
					scoreArray[frame][2] = scoreArray[frame-1][2] + 20 + scoreArray[frame+2][0];
					
				  }
			
		        }
			}

        }
		if (scoreArray[frame][0] + scoreArray[frame][1] == 10){}
		
	} 
    
	return scoreArray[frame-1][2];
}
