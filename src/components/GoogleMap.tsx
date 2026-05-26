"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";
import styles from "./GoogleMap.module.css";

declare global {
    interface Window {
        initGoogleMapCallback?: () => void;
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        google?: any;
    }
}

const center = { lat: -24.14801, lng: 35.48309 };

export default function GoogleMap() {
    const mapRef = useRef<HTMLDivElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [mapError, setMapError] = useState(false);
    
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    useEffect(() => {
        if (!apiKey) return;

        // Check if script is already loaded
        if (window.google && window.google.maps) {
            initMap();
            return;
        }

        const scriptId = "google-maps-script";
        let script = document.getElementById(scriptId) as HTMLScriptElement;

        if (!script) {
            script = document.createElement("script");
            script.id = scriptId;
            script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initGoogleMapCallback`;
            script.async = true;
            script.defer = true;
            
            script.onerror = () => {
                console.error("Failed to load Google Maps script.");
                setMapError(true);
            };
            
            document.head.appendChild(script);
        }

        window.initGoogleMapCallback = () => {
            initMap();
        };

        function initMap() {
            if (!mapRef.current || !window.google) return;

            try {
                const maps = window.google.maps;
                
                const map = new maps.Map(mapRef.current, {
                    center: center,
                    zoom: 14,
                    // Premium minimal map styling (matching Island Rock sand and ocean color palette)
                    styles: [
                        {
                            "elementType": "geometry",
                            "stylers": [{ "color": "#F4F1EA" }] // Sand backdrop
                        },
                        {
                            "elementType": "labels.icon",
                            "stylers": [{ "visibility": "simplified" }, { "opacity": 0.5 }]
                        },
                        {
                            "elementType": "labels.text.fill",
                            "stylers": [{ "color": "#4A4A4A" }] // Charcoal text
                        },
                        {
                            "elementType": "labels.text.stroke",
                            "stylers": [{ "color": "#F4F1EA" }]
                        },
                        {
                            "featureType": "water",
                            "elementType": "geometry",
                            "stylers": [{ "color": "#94B4B6" }] // Sea/ocean tone
                        },
                        {
                            "featureType": "water",
                            "elementType": "labels.text.fill",
                            "stylers": [{ "color": "#333333" }]
                        },
                        {
                            "featureType": "landscape",
                            "elementType": "geometry",
                            "stylers": [{ "color": "#EDE9E1" }] // Slightly darker sand/stone
                        },
                        {
                            "featureType": "road",
                            "elementType": "geometry",
                            "stylers": [{ "color": "#FFFFFF" }] // Clean white roads
                        },
                        {
                            "featureType": "road",
                            "elementType": "labels.text.fill",
                            "stylers": [{ "color": "#777777" }]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "geometry",
                            "stylers": [{ "color": "#E5DFD5" }]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "geometry",
                            "stylers": [{ "color": "#D3DCD5" }] // Soft greens
                        }
                    ],
                    mapTypeControl: true,
                    mapTypeControlOptions: {
                        style: maps.MapTypeControlStyle.HORIZONTAL_BAR,
                        position: maps.ControlPosition.TOP_LEFT,
                    },
                    streetViewControl: false,
                    fullscreenControl: true,
                    zoomControl: true,
                });

                const marker = new maps.Marker({
                    position: center,
                    map: map,
                    title: "Island Rock Beach Estate",
                    animation: maps.Animation.DROP,
                });

                const infowindow = new maps.InfoWindow({
                    content: `
                        <div style="font-family: var(--font-body), sans-serif; padding: 0.6rem; max-width: 240px; color: var(--color-charcoal);">
                            <h4 style="margin: 0 0 0.3rem 0; font-family: var(--font-heading), serif; font-weight: normal; font-size: 1.15rem; color: #333;">Island Rock</h4>
                            <p style="margin: 0 0 0.5rem 0; font-size: 0.85rem; line-height: 1.4; color: #666;">Pristine reef-protected beachfront estate in Jangamo, Inhambane.</p>
                            <a href="https://maps.google.com/?q=-24.14801,35.48309" target="_blank" rel="noopener noreferrer" style="font-size: 0.8rem; color: #4A6C6F; text-decoration: underline; font-weight: 500;">Open in Google Maps</a>
                        </div>
                    `
                });

                marker.addListener("click", () => {
                    infowindow.open(map, marker);
                });

                // Open by default
                infowindow.open(map, marker);
                setIsLoaded(true);
            } catch (err) {
                console.error("Error initializing Google Map:", err);
                setMapError(true);
            }
        }

        return () => {
            // Cleanup globally registered callback on unmount
            if (window.initGoogleMapCallback) {
                delete window.initGoogleMapCallback;
            }
        };
    }, [apiKey]);

    // Render interactive Leaflet/OpenStreetMap fallback if API Key is not set or failed to load
    if (!apiKey || mapError) {
        return (
            <div className={styles.mapWrapper}>
                <iframe
                    title="Island Rock Location Map (Interactive Fallback)"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=35.460%2C-24.162%2C35.506%2C-24.132&layer=mapnik&marker=-24.14801%2C35.48309"
                    className={styles.mapContainer}
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                />
                
                <div className={styles.fallbackContainer}>
                    <div className={styles.overlay}>
                        <div className={styles.iconWrapper}>
                            <MapPin size={48} strokeWidth={1.5} />
                        </div>
                        <h3 className={styles.title}>Google Maps Integration</h3>
                        <p className={styles.description}>
                            To enable custom styled map views, premium route plotting, and detailed satellite imagery, 
                            please set up your Google Maps API Key in your workspace.
                        </p>
                        <div className={styles.instructions}>
                            NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key_here
                        </div>
                        <a 
                            href="https://developers.google.com/maps/documentation/javascript/get-api-key"
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={styles.ctaButton}
                        >
                            Get API Key
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.mapWrapper}>
            {!isLoaded && (
                <div className={styles.fallbackContainer}>
                    <div className={styles.loadingSpinner}>
                        <div className={styles.spinner} />
                        <span>Loading Location Map...</span>
                    </div>
                </div>
            )}
            <div ref={mapRef} className={styles.mapContainer} />
        </div>
    );
}
