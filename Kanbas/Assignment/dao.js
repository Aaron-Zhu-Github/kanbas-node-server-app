import model from "./model.js";
export async function updateAssignment(assignmentId, assignmentUpdates) {
  try {
    const updatedaAsignment = await model.findByIdAndUpdate(
        assignmentId,
        assignmentUpdates,
        {new: true}
    );

    if (!updatedaAsignment) {
      throw new Error('Course not found');
    }

    return updatedaAsignment;
  } catch (error) {
    console.error('Error updating course:', error);
    throw error;
  }
}

export async function deleteAssignment(assignmentId) {
  console.log(assignmentId);
  return await model.deleteOne({_id: assignmentId});
}

export function createAssignment(assignment) {
  delete assignment._id;
  return model.create(assignment);
}

export async function findAllAssignment(courseId) {
  return await model.find({course: courseId});
}

export async function fetchAssignment(assignmentId) {
  try {
    const assignment = await Assignment.findById(assignmentId);
    return assignment;
  } catch (error) {
    console.error('Error fetching assignment:', error);
    throw error; 
  }
}