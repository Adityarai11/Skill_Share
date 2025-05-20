import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { CourseGrid } from '../components/CourseGrid';
import { Course } from '../types';

const MyCourses = () => {
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMyCourses = async () => {
            try {
                const response = await api.get('/user/purchases');
                setCourses(response.data.purchase);
            } catch (error) {
                console.error('Failed to fetch courses:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchMyCourses();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-6">My Courses</h1>
            <CourseGrid courses={courses} />
        </div>
    );
};

export default MyCourses;
