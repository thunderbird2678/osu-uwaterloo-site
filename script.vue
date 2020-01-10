var osuButton = new Vue(
{
	el: "#logo",
	data:
	{
		style: 
		{
		    display: 'block',
		    height: '60vh',
		    marginLeft: 'auto',
		    marginRight: 'auto',
		    marginTop: '10vh'
		}
	},
    methods: {
        mouseOver: function()
    	{
    		this.style.height = '100vh';
    		console.log("ehh?");
        },
        mouseLeave: function()
        {
        	this.style.height = '60vh';
    		console.log("ehh!");
        }
    }
})