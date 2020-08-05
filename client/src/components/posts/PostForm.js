import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { addPost } from "../../actions/post"

const PostForm = ({ addPost }) => {
    const [text, setText] = useState('')
    return (

        <div  class="post-form">
            <div style = {{width:'100%',background:'#151B54',padding:'2rem',color:'white'}} >
                <h3 style={{fontFamily:'Merriweather',
                display:'flex',
                justifyContent:'center',
                
                }} >Say something or Post your request here </h3>
            </div>
            <br/>
            <form style={{fontFamily:'Merriweather',
                display:'flex',
                justifyContent:'center',
                flexDirection:'column',
                flexWrap:'wrap'
                }}
            class="form my-1" onSubmit={e => {
                e.preventDefault()
                addPost({ text })
                setText("")
            }}>
                <textarea
                    name="text"
                    cols="30"
                    rows="5"
                    style={textArea_style}
                    placeholder="Create your post ..."
                    value={text}
                    onChange={e => setText(e.target.value)}
                    required
                ></textarea>
                <input type="submit" class="btn btn-dark my-1" value="Submit" />
            </form>
        </div>
    )
}

PostForm.propTypes = {
    addPost: PropTypes.func.isRequired,
}

const textArea_style = {
    width:'100%',
    outline:'none',
    border:'2px solid black',
    decoration:'none',
    boxShadow:'3px 3px 3px 3px black',
    marginBottom:'2rem',

}

export default connect(null, { addPost })(PostForm)
