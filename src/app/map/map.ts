import { AfterViewInit, Component } from '@angular/core';
import maplibregl from 'maplibre-gl';

const MOCK_POINTS = [
  { lat: 52.52, lng: 13.405, name: 'Berlin' },
  { lat: 48.8566, lng: 2.3522, name: 'Paris' },
  { lat: 50.1109, lng: 8.6821, name: 'Frankfurt' },
  { lat: 45.4642, lng: 9.19, name: 'Milan' },
];

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.html',
  styleUrl: './map.scss',
})
export class Map implements AfterViewInit {
  private map!: maplibregl.Map;

  ngAfterViewInit() {
    this.map = new maplibregl.Map({
      container: 'map',
      style: 'https://demotiles.maplibre.org/style.json',
      center: [13.405, 52.52],
      zoom: 5,
    });

    this.map.on('load', () => this.loadPoints());
  }

  private loadPoints() {
    const features = MOCK_POINTS.map((p) => ({
      type: 'Feature' as const,
      geometry: {
        type: 'Point' as const,
        coordinates: [p.lng, p.lat],
      },
      properties: {
        name: p.name,
      },
    }));

    this.map.addSource('points', {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features,
      },
    });

    this.map.addLayer({
      id: 'markers',
      type: 'circle',
      source: 'points',
      paint: {
        'circle-radius': 8,
        'circle-color': '#1976d2',
      },
    });
  }
}
