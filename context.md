#Context System

<li>Get data from parent component to any nested child component</li>
<p>
    We can communicate from any arbitrary parent to any arbitrary child. It doesnot have to be direct one-to-one communication.
</p>
<p>
    To communicate or transferring the data we have to create a context object
</p>

<ol>
<p>There are two ways to put information in to the context object.
<li>Setup default value when context object is created</li>
or
<li>Creating a Provider component inside the Parent component which push information into the context object.</li>
</ol>
<ol>
<p>There are two ways to get information out form  context object.
<li>Refrencing this.context property (usually better for getting the information form the single context object)</li>
or
<li>Or creating a Consumer component into the child component</li>
</ol>