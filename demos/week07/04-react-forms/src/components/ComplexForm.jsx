import { useState } from "react";

export default function ComplexForm() {
    const [formInfo, setFormInfo] = useState({})

    console.log(formInfo)

    // this is a 'controlled' form. 
    // can do real time input validation
    // downsides: can be complex to reason about 
    // not always needed

    function handleChange(e) {
        console.log(e.target.name)

        setFormInfo({
            // spread copies the previous value of formInfo into the new value - we're making a new object each time
            // += instead of ='s
            ...formInfo,
            [e.target.name] : e.target.value
        })
    }

  return (
    <form>
      <input name="userName" onChange={handleChange} />
      <input name="password" onChange={handleChange} type="password" />
      <input name="location" onChange={handleChange} />
      <input name="age" onChange={handleChange} />
      <input required name="creditcard" onChange={handleChange} />
      <input name="mothers_birthday" onChange={handleChange} />
      <input name="bank" onChange={handleChange} />
      <input name="pet_name" onChange={handleChange} />
      <input name="foo" onChange={handleChange} />
      <button type="submit">submit</button>
    </form>
  );
}
