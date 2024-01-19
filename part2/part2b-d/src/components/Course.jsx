import Header from "./Header"
import Content from "./Content"

const Course = ({ courses }) => {
    console.log("Courses parts ", courses)
    return (
        <div>
            {courses.map(course =>
                <DisplayCourse key={course.id} course={course} />)}
        </div>
    )
}

const DisplayCourse = ({ course }) => {
    return (
            <div>
                <Header name={course.name} />
                {course.parts.map(part =>
                    <Content key={part.id} name={part.name} exercises={part.exercises} />)}
                <b>total of {course.parts.reduce((acc, co) => { return acc + co.exercises }, 0)} exercises</b>
            </div>
    )
}

export default Course