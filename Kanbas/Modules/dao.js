import ModuleModel from "./model.js";

export async function updateModule(moduleId, moduleUpdates) {
    try {
        return await ModuleModel.findByIdAndUpdate(
            moduleId,
            moduleUpdates,
            {new: true}
        );
    } catch (error) {
        console.error("Error updating module:", error);
        throw error;
    }
}

export async function deleteModule(moduleId) {
    return ModuleModel.deleteOne({ _id: moduleId });
}

export async function createModule(module) {
    try {
        const newModule = new ModuleModel(module);
        return await newModule.save();
    } catch (error) {
        console.error("Error creating module:", error);
        throw error;
    }
}

export async function findModulesForCourse(courseId) {
    try {
        return await ModuleModel.find({course: courseId});
    } catch (error) {
        console.error("Error finding modules for course:", error);
        throw error;
    }
}

export function findModulesForCourse1(courseId) {
    const { modules } = Database;
    return modules.filter((module) => module.course === courseId);
}