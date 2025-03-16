import CourseDetails from "../CourseDetails";
import { coursesTableData } from "../Table/CoursesTableData";



export default function CourseDetailsPage({ params }) {
  const course = coursesTableData.find((c) => c.id === params.id);

  if (!course) {
    return <div>Course not found</div>;
  }

  return <CourseDetails course={course} />;
}
