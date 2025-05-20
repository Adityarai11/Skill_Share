import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Course } from '../types';
import { CourseGrid } from '../components/CourseGrid';

const Home = () => {
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await api.get('/courese/preview');
                setCourses(response.data.courses);
            } catch (error) {
                console.error('Failed to fetch courses:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-6">Available Courses</h1>
            <CourseGrid courses={courses} />
        </div>
    );
};

export default Home;